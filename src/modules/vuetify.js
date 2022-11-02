import 'vuetify/lib/styles/main.sass'
import * as icons from '@/config/icons'
import { defaults } from '@/config/defaults'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import folder from '@/icons/icon.vue'

// Translations provided by Vuetify
import { en } from 'vuetify/locale'

const aliasesCustom = {
  ...aliases,
  folder,
}

export const install = app => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: 'mdi',
      aliases: {
        ...aliasesCustom,
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
