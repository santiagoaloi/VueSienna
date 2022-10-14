import '@/styles'
import { auth } from '@/firebase'
import { Vue } from '@U/instanciateVue'

// Init Vue.
auth.onAuthStateChanged(async user => {
  Vue(user)
})
