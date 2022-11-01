import 'vuetify/lib/styles/main.sass'
import * as icons from '@/config/icons'
import { defaults } from '@/config/defaults'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Translations provided by Vuetify
import { en } from 'vuetify/locale'

export const install = app => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliases,
        ...icons,
      },
      sets: {
        mdi,
      },
    },
    defaults,
    locale: {
      locale: 'en',
      fallback: 'en',
      messages: { en },
    },
    theme: {
      defaultTheme: 'dark',
    },
  })
  app.use(vuetify)
}
