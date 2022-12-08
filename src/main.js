import { Vue } from '@U/instanciateVue'

/*
 =========================================================
 * VueSienna - v1.0.2
 =========================================================

 * Product Page: https://github.com/santiagoaloi/VueSienna
 * Copyright 2022 to Present - Skriptag  (http://skriptag.com)

 =========================================================
 */

// Init Vue and set new user on auth changes.
auth.onAuthStateChanged(async user => {
  Vue(user)
})
