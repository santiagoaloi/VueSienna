import { metadataInjector } from '../config/route-settings'

const useMetadataInjector = metadataInjector()

export default routes => {
  const allRoutes = JSON.parse(JSON.stringify(routes))

  allRoutes.forEach(route => {
    // Injet meta  defined in @/config/route-settings.
    const { component } = route

    for (const rule of useMetadataInjector) {
      const { keywords, meta: injectNewMeta } = rule

      //Match any keyword defined.
      // Use every instead of some if you need exact matches.

      if (keywords.some(keyword => component.includes(keyword))) {
        route.meta = { ...route.meta, ...injectNewMeta, fullPath: component }
      }
    }
  })

  return allRoutes
}
