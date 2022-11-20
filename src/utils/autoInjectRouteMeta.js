import { metadataInjector } from '../config/route-settings'

const useMetadataInjector = metadataInjector()

export default routes => {
  const allRoutes = JSON.parse(JSON.stringify(routes))

  return allRoutes.map(route => {
    const { component } = route

    for (const rule of useMetadataInjector) {
      const { keywords, meta: injectNewMeta } = rule

      // Match any keyword defined in config.
      // Use every instead of some if you need exact matches.

      if (keywords.some(keyword => component.includes(keyword))) {
        route.meta = { ...route.meta, ...injectNewMeta, fullPath: component }
      }
    }

    return route
  })
}
