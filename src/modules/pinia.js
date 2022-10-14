import { router } from '@M/routes'

export const install = app => {
  const pinia = createPinia()

  // Router can be used in any pinia store module.
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  app.use(pinia)
}
