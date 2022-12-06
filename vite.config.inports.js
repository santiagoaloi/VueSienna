import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import viteFonts from 'vite-plugin-fonts'
import vuetify from 'vite-plugin-vuetify'

import basicSsl from '@vitejs/plugin-basic-ssl'

import layouts from 'vite-plugin-vue-layouts'
import vueMacros from 'unplugin-vue-macros/vite'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import removeConsole from 'vite-plugin-remove-console'

import { default as injectMetadata } from './src/utils/autoInjectRouteMeta'

export {
  basicSsl,
  resolve,
  vue,
  pages,
  layouts,
  vuetify,
  vueMacros,
  viteFonts,
  autoImport,
  components,
  defineConfig,
  removeConsole,
  injectMetadata,
}
