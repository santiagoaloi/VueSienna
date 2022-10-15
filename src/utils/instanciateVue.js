import rootApp from '@/App.vue'
import { useAuthStore } from '@S/authenticationStore'

let app

export const Vue = user => {
  const setStoreUser = user => (useAuthStore().user = user)

  if (!app) {
    app = createApp(rootApp)

    console.log('creating app')

    // install all plugin modules.
    autoImportModules(app)

    // Set firebase user (jf any) saved in indexedDB in browser.
    setStoreUser(user)

    // Mount Vue after auth and modules are done.
    app.mount('#app')
    return
  }

  // Set user state only after Vue is instanciated.
  setStoreUser(user)
}
