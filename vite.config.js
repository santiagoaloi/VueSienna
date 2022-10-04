import * as use from './vite.config.imports.js'

// https://vitejs.dev/config/
export default use.defineConfig(async () => {
  return {
    resolve: {
      alias: [
        { find: '@', replacement: use.resolve(__dirname, './src') },
        {
          find: '@@',
          replacement: use.resolve(__dirname, './src/stores/modules'),
        },
      ],
    },

    css: {
      scopeBehaviour: 'local',
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/variables.scss";',
        },
      },
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
      // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
      use.vue({
        reactivityTransform: true, //Still in beta, use with caution.
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
            'vue-router': ['createRouter', 'createWebHistory', 'useRouter'],
          },
          {
            vuetify: ['useDisplay', 'createVuetify'],
          },
        ],
        dirs: ['src/utils/*', 'src/presets/*'],
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
        // Metadata injection is done @/utils/autoGenerateRoutes.
        // onRoutesGenerated: use.injectMetadata,'
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
  }
})
