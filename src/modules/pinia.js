import { router } from '@/modules/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const install = app => {
  const pinia = createPinia()

  // 👉 Router can be used in any pinia store module.
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  app.use(pinia)
  pinia.use(piniaPluginPersistedstate)
}
