// import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/lib/styles/main.sass'
import * as icons from '@/config/icons'

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
    defaults: {
      VToolbar: {
        VBtn: { variant: 'elevated' },
      },
      VAppBar: {
        flat: true,
        border: true,
        density: 'comfortable',
      },
    },
    theme: {
      defaultTheme: 'dark',
    },
  })
  app.use(vuetify)
}
