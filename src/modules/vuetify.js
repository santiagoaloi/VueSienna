// Global defaults
import { createVuetify } from 'vuetify'

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
      defaultTheme: 'dark',
      themes: {
        dark: {
          dark: true,
          colors: {
            primary: '#7366ff',
          },
          variables: {
            'border-color': '#f0077b',
          },
        },
      },
    },
  })
  app.use(vuetify)
}
