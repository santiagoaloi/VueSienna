/**
 * Define the route object data before building
 * he Routes array.
 * @Keyword  Any word in the component path string.
 * @meta     metadata object that will be added.
 * @ruleEnabled  Enable / Disable the rule.
 */

function routeModifier() {
  return [
    {
      keyword: 'public',
      meta: {
        layout: 'default',
        requiresAuth: true,
      },
    },

    {
      keyword: 'private',
      meta: {
        layout: 'private',
        requiresAuth: true,
      },
    },
  ]
}

/**
 * Define the route object data before building
 * the Routes array.
 * @ConsoleLogRoutes  Print all routes to console after parsing and  injecting meta.
 */

function debug() {
  return {
    consoleLogRoutes: false,
  }
}

export { routeModifier, debug }
