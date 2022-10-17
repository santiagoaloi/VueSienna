import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/lib/styles/main.sass'
import * as icons from '@/config/icons'
import { defaults } from '@/config/defaults'

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
    theme: {
      defaultTheme: 'dark',
    },
  })
  app.use(vuetify)
}
