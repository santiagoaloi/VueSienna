// Styles
import { mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default {
  install: app => {
    const v = createVuetify({
      icons: {
        defaultSet: 'mdiSvg',
        sets: {
          mdiSvg,
        },
      },
    })
    app.use(v)
  },
}
