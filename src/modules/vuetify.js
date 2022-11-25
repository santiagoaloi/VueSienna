// Global defaults
import { createVuetify } from 'vuetify'
import appBarground from '@/asets/app-bg.svg'

// Default configurations
import { defaults } from '@/config/vuetify/defaults'

// Icons
import * as icons from '@/config/vuetify/icons'
import { aliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

// Dont import @/@core/scss/vuetify/_variables.scss
// as it is imported by vuetify plugin in vite.config.js
import '@/@core/scss/vuetify/index.scss'

import 'vuetify/styles'

export const install = app => {
  const vuetify = createVuetify({
    defaults,
    icons: {
      defaultSet: 'mdiSvg',
      aliases: {
        ...icons,
        ...aliases,
      },
      sets: {
        mdiSvg,
      },
    },
    theme: {
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#7366ff',
            'appbar-background': '#22272e',
          },
          variables: {
            //Custom Skriptag vars
            'app-background': '#22272e',
            'app-typography': '#adbac7',
            'app-gradient-title-from': '#9898df',
            'app-gradient-title-to': '#adbac7',
            'app-app-bar-tab-slider-color': '#192430',
            'app-skriptag-title': '#192430',
          },
        },
        light: {
          dark: true,
          colors: {
            primary: '#7366ff',
            'appbar-background': '#22272e',
          },
          variables: {
            //Custom Skriptag vars
            'app-background': '#e8eaed',
            'app-typography': '#192430',
            'app-gradient-title-from': '#9898df',
            'app-gradient-title-to': '#192430',
            'app-app-bar-tab-slider-color': '#192430',
            'app-skriptag-title': '#192430',
          },
        },
      },
    },
  })
  app.use(vuetify)
}
