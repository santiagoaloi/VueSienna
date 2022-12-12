import generatedRoutes from '~pages'
import { useAppStore } from '@/stores/appStore'
import { setupLayouts } from 'virtual:generated-layouts'

// Progress bar on top of the page.
// Customize styles in @/styles/_progress-bar.css
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes: [
    ...setupLayouts(generatedRoutes),
    { name: 'logout', path: '/logout' },
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

router.beforeEach(async (to, from, next) => {
  const isAuth = await getUserState()

  const isLogout = to.matched.some(r => r.path === '/logout')

  const atLoginAndAuthenticated = to.matched.some(
    r => r.path === '/login' && isAuth
  )

  //Requires Authentication
  const requiresAuth = to.matched.some(r => r.meta.requiresAuth)

  if (to.path !== from.path) {
    // Calling useAppStore inside guards
    // to avoid getting `pinia not being instanciated` error.
    const store = useAppStore()

    //Avoids button flickering on fast routing.
    setTimeout(() => {
      store.isRouting = true
    }, 600)

    NProgress.start()
  }

  // If the route requires the user to be authenticated and it is not,
  // route to the login page.
  if (isLogout) {
    const auth = useAuthStore()
    await auth.logout()
    next({ path: '/' })
    return
  }

  // If the route requires the user to be authenticated and it is not,
  // route to the login page.
  if (requiresAuth && !isAuth) {
    next({ path: '/login' })
    return
  }

  // If the user navigates to the login page and it's already authenticated,
  // route to the profile page instead.
  if (atLoginAndAuthenticated) {
    next({ path: '/account/publicprofile' })
    return
  }

  next()
})

// If navigation fails fomr some reason.
router.onError(() => {
  const store = useAppStore()

  //Avoids button flickering on fast routing.
  setTimeout(() => {
    store.isRouting = false
  }, 600)

  log('Route not reachable.')
})

router.afterEach((to, from, failure) => {
  // Calling useAppStore inside guards
  // to avoid getting `pinia not being instanciated` error.
  const store = useAppStore()
  //Avoids button flickering on fast routing.
  setTimeout(() => {
    store.isRouting = false
  }, 600)

  NProgress.done()
})

const install = app => app.use(router)

// Exporting router so Pinia can import it
// 👉 allowing router in store modules.
export { install, router }
