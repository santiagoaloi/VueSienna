// Global defaults
import { createVuetify } from 'vuetify'

import { defaults } from '@/config/defaults'

// Icons
import * as icons from '@/config/icons'
import { aliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

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
        },
      },
    },
  })
  app.use(vuetify)
}
