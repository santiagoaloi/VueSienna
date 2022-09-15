import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'

import vuetify from 'vite-plugin-vuetify'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  optimizeDeps: {
    include: ['vue', 'vue-router'],
  },

  plugins: [
    vue({
      reactivityTransform: true,
    }),

    // https://github.com/sxzz/unplugin-vue-macros
    VueMacros(),

    vuetify({ autoImport: true, styles: { configFile: 'src/settings.scss' } }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/dishait/vite-auto-import-resolvers
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros'],
      dirs: ['src/composables'],
      vueTemplate: true,
      dts: false,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: false,
      deep: true,
    }),
  ],
})
