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
      keyword: 'private',
      meta: {
        layout: 'secure',
        requiresAuth: true,
      },
    },
    {
      keyword: 'public',
      meta: {
        layout: 'public',
        requiresAuth: false,
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
