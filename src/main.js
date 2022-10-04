// Auto import any styles in @/styles
import '@/styles'
import { auth as firebaseAuth } from '@/firebase'
import { useAuthStore } from '@@/authenticationStore'
import ROOT from '@/App.vue'

let app
firebaseAuth.onAuthStateChanged(async authenticatedUser => {
  if (!app) {
    app = createApp(ROOT, {})
    autoImportPlugins(app)
    app.mount('#app')
    const auth = useAuthStore()
    auth.user = authenticatedUser
  }
})
