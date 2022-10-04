import { router } from '@/modules/routes'

export const install = app => {
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  app.use(pinia)
}
