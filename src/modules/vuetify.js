import { createVuetify } from 'vuetify'

// Default configurations
import {
  defaults,
  themes,
  icons,
  aliases as componentAliases,
} from '@/config/vuetify'

// Icons
import { aliases as iconAliases, mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'

// Dont import @/@core/scss/vuetify/_variables.scss
// as it is imported by vuetify plugin in vite.config.js
import '@/@core/scss/vuetify/index.scss'

import 'vuetify/styles'

export const install = app => {
  const vuetify = createVuetify({
    aliases: {
      ...componentAliases,
    },
    icons: {
      defaultSet: 'mdiSvg',
      aliases: {
        ...icons,
        ...iconAliases,
      },
      sets: {
        mdiSvg,
      },
    },
    theme: {
      themes,
    },

    defaults,
  })
  app.use(vuetify)
  log('Vuetify initialized')
}
