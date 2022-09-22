import { createPinia } from 'pinia'

export default {
  install: app => {
    const p = createPinia()
    app.use(p)
  },
}
