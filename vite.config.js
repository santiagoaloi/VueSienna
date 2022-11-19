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
        //   manualChunks: {
        //     //Vue
        //     vue: ['vue-router', 'vue', 'pinia'],

        //     //Vuetify
        //     vuetify: ['vuetify', 'vuetify/components', 'vuetify/directives'],

        //     // 🔥 Firebase
        //     'firebase-auth': ['firebase/auth'],
        //     'firebase-firestore': ['firebase/firestore'],
        //     'firebase-functions': ['firebase/functions'],
        //     'firebase-storage': ['firebase/storage'],
        //     'firebase-app': ['firebase/app'],
        //   },
      },
    },
  },

  optimizeDeps: {
    exclude: ['vuetify'],
    entries: ['./src/**/*.vue'],
  },

  server: {
    port: 8000,
  },

  preview: {
    port: 8089,
  },

  define: {
    'process.env': {},
    __VUE_OPTIONS_API__: true,
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
          '@/firebase': ['auth', 'db', 'functions'],
        },
      ],
      dirs: ['src/utils/**', 'src/presets/**', 'src/composables/*'],
      vueTemplate: true,
      dts: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    use.layouts(),

    // https://github.com/antfu/unplugin-vue-components
    use.components({
      dirs: [
        //Base reusable components
        'src/components',
        //Layout individual components (default, secure, etc...)
        'src/layouts/components/**',
      ],
      extensions: ['vue'],
      dts: true,
      deep: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    use.pages({
      // dirs: [
      //   { dir: 'src/pages', baseRoute: '' },
      // ],

      exclude: ['**/data/**'],

      // Metadata injection is done @/utils/autoGenerateRoutes.
      // onRoutesGenerated: use.injectMetadata,
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
      autoImport: true,
      styles: { configFile: 'src/settings.scss' },
    }),

    // https://github.com/stafyniaksacha/vite-plugin-fonts
    use.viteFonts({
      // Custom fonts.
      custom: {
        families: [
          {
            name: 'Product Sans',
            local: 'Product Sans',
            src: './src/styles/fonts/*.woff',
          },
        ],
      },
    }),
  ],
})
