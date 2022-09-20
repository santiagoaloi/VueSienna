import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// Application config
import autoGenerateRoutes from './src/utils/autoGenerateRoutes'
import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // optimizeDeps: {
  //   include: ['vue', 'vue-router'],
  // },

  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue({
      reactivityTransform: true,
    }),

    // https://github.com/sxzz/unplugin-vue-macros
    VueMacros(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros'],
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
      dts: false,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: false,
      deep: true,
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],

      dirs: [
        { dir: 'src/pages', baseRoute: '/' },
        { dir: 'src/pages/protected/**/', baseRoute: '' },
        { dir: 'src/pages/public/**/', baseRoute: '' },
      ],

      // Route guards are managed in @/modules/routeguards.
      // Metadata injection is done @/utils/autoGenerateRoutes.
      onRoutesGenerated: autoGenerateRoutes,
    }),

    vuetify({ autoImport: true, styles: { configFile: 'src/settings.scss' } }),
  ],
})
