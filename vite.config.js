import * as use from './vite.config.inports.js'

// https://vitejs.dev/config/
export default use.defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: use.resolve(__dirname, './src') },
      {
        find: '@S',
        replacement: use.resolve(__dirname, './src/stores/modules'),
      },
      {
        find: '@M',
        replacement: use.resolve(__dirname, './src/modules'),
      },
      {
        find: '@U',
        replacement: use.resolve(__dirname, './src/utils'),
      },
      {
        find: '@C',
        replacement: use.resolve(__dirname, './src/composables'),
      },
    ],
  },

  build: {
    sourcemap: 'hidden',
    rollupOptions: {
      output: {
        compact: true,
        manualChunks: {
          //Vue
          vue: ['vue-router', 'vue', 'pinia'],

          //Vuetify
          vuetify: ['vuetify', 'vuetify/components', 'vuetify/directives'],

          // 🔥 Firebase
          'firebase-auth': ['firebase/auth'],
          'firebase-firestore': ['firebase/firestore'],
          'firebase-functions': ['firebase/functions'],
          'firebase-storage': ['firebase/storage'],
          'firebase-app': ['firebase/app'],
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
    port: 8000,
  },

  preview: {
    port: 8089,
  },

  define: {
    'process.env': {},
    __VUE_PROD_DEVTOOLS__: false,
  },

  plugins: [
    use.vue({
      reactivityTransform: true,
    }),

    // https://github.com/xiaoxian521/vite-plugin-remove-console
    use.removeConsole(),

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

          // Vuetify
          vuetify: ['useDisplay', 'createVuetify'],

          // 🔥 Firebase
          'firebase/firestore': ['doc', 'getDoc', 'setDoc'],
          'firebase/auth': ['GoogleAuthProvider', 'signInWithPopup', 'signOut'],
          '@/firebase': ['auth', 'db', 'functions', 'getUserState'],
        },
      ],
      dirs: [
        'src/utils/**',
        'src/presets/**',
        'src/composables/*',
        'src/composables/*',
      ],
      vueTemplate: true,
      dts: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    use.layouts(),

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

    // https://github.com/hannoeru/vite-plugin-pages
    use.pages({
      dirs: [
        // 🔗 http://skriptag.com/
        {
          dir: 'src/pages',
          baseRoute: '/',
        },

        // 🔗 http://skriptag.com/SomePage
        // @/pages/secure/[ignoredFolder]/somePage.vue
        // @/pages/secure/[ignoredFolder]/[someFolder]/somePage.vue
        {
          dir: 'src/pages/*',
          baseRoute: '/',
        },

        // 🔗 http://skriptag.com/playground
        {
          dir: 'src/pages/playground/playground-landing',
          baseRoute: '/',
        },

        // 🔗 http://skriptag.com/playground/someProject
        // @/pages/playground/projects/[anyFolder]/someProject.vue
        {
          dir: 'src/pages/playground/projects/**',
          baseRoute: '/playground',
        },
      ],

      exclude: ['**/components/*'],

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
