import { createRouter, createWebHistory } from 'vue-router'
import generatedRoutes from '~pages'
import { setupLayouts } from 'virtual:generated-layouts'
const routes = setupLayouts(generatedRoutes)

export default {
  install: app => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [...routes],
    })
    app.use(router)
  },
}
