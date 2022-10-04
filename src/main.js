import '@/styles'
import Root from '@/App.vue'
import { auth as firebaseAuth } from '@/firebase'
import { useAuthStore } from '@@/authenticationStore'

let V
firebaseAuth.onAuthStateChanged(async authenticatedUser => {
  if (!V) {
    V = createApp(Root, {})
    autoImportPlugins(V)
    V.mount('#app')
    const auth = useAuthStore()
    auth.user = authenticatedUser
  }
})
