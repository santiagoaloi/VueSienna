import { VueFire, VueFireAuth } from 'vuefire'
import { app as firebaseApp } from '@/firebase'

export const install = app => {
  app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()],
  })
  log('VueFire initialized.')
}
