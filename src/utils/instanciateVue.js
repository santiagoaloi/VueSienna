import rootApp from '@/App.vue'
import { log } from 'vue-chemistry/console'

// State Managemenet
import { useAuthStore } from '@/stores/authenticationStore'

// Styling
import '@/styles'

// needed while using local/custom fonts.
// github.com/stafyniaksacha/vite-plugin-fonts
import 'virtual:fonts.css'

let appMounted

const setStoreUser = user => (useAuthStore().user = user)

function mount(user) {
  appMounted = createApp(rootApp)

  // install all plugin modules.
  autoImportModules(appMounted)

  // Set firebase user (jf any) saved in indexedDB in browser.
  setStoreUser(user)

  // Mount Vue after auth and modules are done.
  appMounted.mount('#app')

  log('Vue application mounted.')
}

export const Vue = user => {
  //Instanciate Vue only once.

  if (!appMounted) {
    mount(user)
    return
  }

  // If a new user authenticates
  // set the new user object to state.
  setStoreUser(user)
}
