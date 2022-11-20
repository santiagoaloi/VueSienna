// Global defaults
import { createVuetify } from 'vuetify'

// Default configurations
import { defaults } from '@/config/vuetify/defaults'

// Icons
import * as icons from '@/config/vuetify/icons'
import { aliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

// Styling
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
        },
      },
    },
  })
  app.use(vuetify)
}
