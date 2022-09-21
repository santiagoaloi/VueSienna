import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import VueMacros from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import progress from 'vite-plugin-progress'
import removeConsole from 'vite-plugin-remove-console'

// Application config
import autoGenerateRoutes from './src/utils/autoGenerateRoutes'
import vuetify from 'vite-plugin-vuetify'

import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    port: 8000,
  },
  preview: {
    port: 8089,
    open: true,
  },

  plugins: [
    // https://github.com/vitejs/vite/tree/main/packages/plugin-vue
    vue({
      reactivityTransform: true,
    }),

    vueJsx(),

    //https://github.com/jeddygong/vite-plugin-progress
    progress(),

    //https://github.com/xiaoxian521/vite-plugin-remove-console
    removeConsole(),

    // https://github.com/sxzz/unplugin-vue-macros
    VueMacros(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],

      imports: ['vue', 'vue-router', 'vue/macros', 'pinia'],
      // dirs: ['src/composables/**', 'src/store/**', 'src/plugins/**', 'src/**'],
      vueTemplate: true,
      // dts: false,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ['vue', 'jsx', 'js'],
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
      ],
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
