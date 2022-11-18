import { Vue } from '@U/instanciateVue'

// Init Vue and set new user on auth changes.
auth.onAuthStateChanged(async user => {
  Vue(user)
})
