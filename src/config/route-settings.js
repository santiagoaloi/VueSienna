/*
 * Define the route object data before building
 * he Routes array.
 * @keywords  Any word in the component path string.
 * @meta     metadata object that will be added.
 * @ruleEnabled  Enable / Disable the rule.
 */

export function metadataInjector() {
  return [
    {
      keywords: ['something'],
      meta: {
        layout: 'private',
        requiresAuth: true,
      },
    },
  ]
}
