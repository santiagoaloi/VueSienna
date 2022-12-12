/*
 * Keeping inports separately to clean Vite config.
 * Any library usage should be prefixed with `use.`
 */

import { dependencies } from './package.json'

function renderChunks(deps) {
  let chunks = {}
  Object.keys(deps).forEach(key => {
    if (['firebase', '@firebase'].includes(key)) return
    chunks[key] = [key]
  })
  return chunks
}

import * as use from './vite.config.inports.js'

// https://vitejs.dev/config/
export default use.defineConfig({
  /*
   * Resolvers provide path shortcuts,
   * autocomplete is configured in jsconfig.json
   */

  resolve: {
    alias: [
      { find: '@', replacement: use.resolve(__dirname, './src') },
      {
        find: '@U',
        replacement: use.resolve(__dirname, './src/utils'),
      },
      {
        find: '@M',
        replacement: use.resolve(__dirname, './src/modules'),
      },
      {
        find: '@S',
        replacement: use.resolve(__dirname, './src/stores/'),
      },
      {
        find: '@C',
        replacement: use.resolve(__dirname, './src/@core/composables'),
      },
    ],
  },

  build: {
    sourcemap: 'hidden',
    rollupOptions: {
      output: {
        compact: true,

        /*
         * Segregating chunks slightly increases bundle size
         * but its very clear what's being downloaded.
         */

        manualChunks: {
          ...renderChunks(dependencies),

          // 🔥 Firebase chunks
          'firebase-app': ['firebase/app'],
          'firebase-auth': ['firebase/auth'],
          'firebase-storage': ['firebase/storage'],
          'firebase-firestore': ['firebase/firestore'],
          'firebase-functions': ['firebase/functions'],
        },
      },
    },
  },

  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue'],
  },

  // Server ports and behavior.
  server: {
    https: false,
    port: 8000,
  },

  preview: {
    port: 8089,
  },

  define: {
    'process.env': {},
  },

  plugins: [
    use.vue({
      /*
       * reactivityTransform is in beta stage.
       * Use with caution.
       */

      reactivityTransform: true,
    }),

    // use.basicSsl(),

    // https://github.com/sxzz/unplugin-vue-macros
    use.vueMacros(),

    // https://github.com/antfu/unplugin-auto-import
    // Autoimport dependencies inside SFCs or JS.
    use.autoImport({
      imports: [
        'vue',
        'vue/macros',
        'pinia',

        {
          // Vue Router
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute',
          ],

          // Vue Chemistry
          'vue-chemistry/console': ['log'],

          // Vuetify
          vuetify: ['useDisplay', 'createVuetify'],

          yup: [
            // field validations
            ['*', 'Yup'], // import { * as yup } from 'yup',
          ],

          //Facilitates dealing with validation form schemas
          'vuetify/components': ['VTextField', 'VTextarea'],

          // // 🔥 VueFire
          // 'vuefire  ': [
          //   'useDocument',
          //   'useCollection',
          //   'getCurrentUser',
          //   'usePendingPromises',
          // ],

          // 🔥 Firebase auto-imports
          'firebase/firestore': [
            'updateDoc',
            'doc',
            'getDoc',
            'setDoc',
            'collection',
            'onSnapshot',
          ],
          'firebase/auth': ['GoogleAuthProvider', 'signInWithPopup', 'signOut'],
          '@/firebase': ['auth', 'db', 'functions', 'getUserState'],
        },
      ],
      dirs: ['src/utils/**', 'src/stores/**', 'src/presets/**'],
      vueTemplate: true,
      dts: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    // Autoimport Vue SFCs.
    use.components({
      dirs: [
        // Base reusable components
        'src/@core/components',

        // Layout individual components (default, secure, etc...)
        'src/layouts/components/**',

        // Any SFCs inside page views. (careful with name collisions)
        // name duplication will cause ignoring those imports.
        'src/pages/**',
      ],

      extensions: ['vue'],
      dts: true,
      deep: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    use.layouts(),

    // https://github.com/xiaoxian521/vite-plugin-remove-console
    use.removeConsole(),

    // https://github.com/hannoeru/vite-plugin-pages
    use.pages({
      dirs: [
        // 🔗 http://skriptag.com/
        {
          dir: 'src/pages/homepage/*',
          baseRoute: '',
        },

        // 🔗 http://skriptag.com/SomePage
        {
          dir: 'src/pages/*',
          baseRoute: '',
        },

        // 🔗 http://skriptag.com/playground
        {
          dir: 'src/pages/playground/playground-landing',
          baseRoute: '',
        },

        // 🔗 http://skriptag.com/playground/someProject
        // @/pages/playground/projects/[anyFolder]/someProject.vue
        {
          dir: 'src/pages/playground/projects/**',
          baseRoute: '/playground',
        },

        // 🔗 http://skriptag.com/account/somePage
        // @/pages/@secure/[anyFolder]/somePage.vue
        {
          dir: 'src/pages/@secure/**',
          baseRoute: '/account',
        },
      ],

      // @/pages/someFolder/someOtherFolder/[components]/someProject.vue
      exclude: ['**/components/**'],

      // Only vue SFCs allowed, exclude any other extension from becoming a route.
      extensions: ['vue'],

      // Metadata injection is done 👉 @/utils/autoGenerateRoutes.js.
      onRoutesGenerated: use.injectMetadata,

      importMode(filepath, options) {
        for (const page of options.dirs) {
          if (
            page.baseRoute === '' &&
            filepath.startsWith(`/${page.dir}/index`)
          )
            return 'sync'
        }
        return 'async'
      },
    }),
    use.vuetify({
      styles: { configFile: 'src/@core/scss/vuetify/variables.scss' },
    }),

    // https://github.com/stafyniaksacha/vite-plugin-fonts
    use.viteFonts({
      // Custom fonts.
      custom: {
        families: [
          {
            name: 'Product Sans',
            local: 'Product Sans',
            // 👉 ProductSans-Regular.woff
            src: './src/styles/fonts/*.woff',
          },
        ],
      },
    }),
  ],
})
