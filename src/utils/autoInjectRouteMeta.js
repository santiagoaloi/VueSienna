import { routeModifier } from '../config/route-settings'

export default routes => {
  const allRoutes = JSON.parse(JSON.stringify(routes))
  allRoutes.forEach(({ component, meta }) => {
    // Inject meta defined in @/config/route-settings.
    for (const { keyword, meta: inject } of routeModifier()) {
      // if (component.includes(keyword)) {
      // Adds component full route path string and meta.
      meta = { ...meta, ...inject, fullPath: component }
      // }
    }
  })

  return allRoutes
}
