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
      dirs: ['src/utils/*', 'src/presets/*', 'src/composables/*'],
      vueTemplate: true,
      dts: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    use.layouts(),

    // https://github.com/antfu/unplugin-vue-components
    use.components({
      extensions: ['vue'],
      dts: true,
      deep: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    use.pages({
      // dirs: [{ dir: 'src/pages', baseRoute: '' }],

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

    use.viteFonts({
      // Custom fonts.
      custom: {
        /**
         * Fonts families lists
         */
        families: [
          {
            /**
             * Name of the font family.
             */
            name: 'Product Sans',
            /**
             * Local name of the font. Used to add `src: local()` to `@font-rule`.
             */
            local: 'Product Sans',
            /**
             * Regex(es) of font files to import. The names of the files will
             * predicate the `font-style` and `font-weight` values of the `@font-rule`'s.
             */
            src: './src/styles/fonts/*.woff',
          },
        ],
      },
      preload: true,
    }),
  ],
})
