/*
 * Inject metadata to routes matching keywords in the
 * route path.
 * @keywords  Any word in the component path string.
 * @meta     metadata object that will be added.
 */

export function metadataInjector() {
  return [
    {
      // If these keywords are present ->
      keywords: ['secure'],
      // Inject the following metadata ->
      meta: {
        layout: 'secure',
        requiresAuth: true,
      },
    },
  ]
}
