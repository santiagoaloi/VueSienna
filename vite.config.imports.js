import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import vuetify from 'vite-plugin-vuetify'
import layouts from 'vite-plugin-vue-layouts'
import vueMacros from 'unplugin-vue-macros/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import removeConsole from 'vite-plugin-remove-console'

import { default as injectMetadata } from './src/utils/autoInjectRouteMeta'

console.log('ℹ️ importing "vite.config.imports"')

export {
  resolve,
  defineConfig,
  vue,
  pages,
  layouts,
  vueMacros,
  autoImport,
  components,
  removeConsole,
  vuetify,
  injectMetadata,
}
