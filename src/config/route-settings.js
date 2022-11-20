/*
 * Inject metadata to routes matching keywords in the
 * route path.
 * @keywords  Any word in the component path string.
 * @meta     metadata object that will be added.
 */

// Related to @/utils/autoInjectRouteMeta.js
// Related to https://github.com/hannoeru/vite-plugin-pages

export function metadataInjector() {
  return [
    {
      // If these keywords are present in the route fullPath...
      keywords: ['secure'],
      // Inject the following metadata in each matching route..
      meta: {
        layout: 'secure',
        requiresAuth: true,
      },
    },
  ]
}
