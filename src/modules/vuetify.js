import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/lib/styles/main.sass'

export const install = app => {
  const vuetify = createVuetify({
    // icons: {
    //   defaultSet: 'mdiSvg',
    //   sets: {
    //     mdiSvg,
    //   },
    // },

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

    locale: {
      defaultLocale: 'en',
      fallbackLocale: 'en',
    },
  })
  app.use(vuetify)
}
