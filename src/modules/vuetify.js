// Global defaults
import { defaults } from '@/config/defaults'

// Icons
import { mdi } from 'vuetify/iconsets/mdi-svg'
import * as icons from '@/config/icons'

// Imports
import { createVuetify } from 'vuetify'

import 'vuetify/styles'

export const install = app => {
  const vuetify = createVuetify({
    defaults,
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...icons,
      },
      sets: {
        mdi,
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
        },
      },
    },
  })
  app.use(vuetify)
}
