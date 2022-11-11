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
          'vue-router': [
            'createRouter',
            'createWebHistory',
            'useRouter',
            'useRoute',
          ],
        },
        {
          vuetify: ['useDisplay', 'createVuetify'],
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
  ],
})
