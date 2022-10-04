// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFunctions } from 'firebase/functions'
import { getFirestore } from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const functions = getFunctions(app)
const db = getFirestore(app)
const auth = getAuth(app)
const getUserState = () =>
  new Promise((resolve, reject) => {
    onAuthStateChanged(auth, resolve, reject)
  })

// if (development) {
//   // appCheck debug token for development.
//   window.FIREBASE_APPCHECK_DEBUG_TOKEN =
//     VITE_FIREBASE_APP_CHECK_DEBUG_TOKEN_FROM_CI
// }

// initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(
//     import.meta.env.VITE_FIREBASE_RECAPTCHA_PROVIDER_TOKEN
//   ),
//   isTokenAutoRefreshEnabled: true,
// })

export { db, storage, auth, functions, getUserState }
