/*
 * Firebase authentication related logic.
 */

import NProgress from 'nprogress'

export const useAuthStore = defineStore('authentication', {
  state: () => ({
    user: null,
    profile: null,
  }),

  getters: {
    isLoggedIn: state => !!state.user,
    userId: state => state.user?.uid,
    userEmail: state => state.user?.email,
    userAvatar: state => state.user?.photoURL,
    userName: state => state.user?.displayName,
  },

  actions: {
    async addUserToUsersCollectionGgoogle(user) {
      // Adds a document in a firestore collection.
      // doc (Firestore instance, collection name, collection id).
      const userDocRef = doc(db, 'users', user.uid)

      const { uid, email, displayName, photoURL } = user

      // Get an array of names
      const names = displayName.split(/(\s+)/)

      // User profile fields to be created in db (payload)
      const userDocData = {
        uid,
        email,
        // First name in the names array
        name: names[0],
        // Rest of the names in the names array
        lastName: names.slice(1).join('').trim(),
        photoURL,
        coverAvatar: '',
        disabled: false,
        verified: true,
        roles: [],
      }

      try {
        await setDoc(userDocRef, userDocData)
        return {
          created: true,
        }
      } catch ({ ...error }) {
        console.log({ ...error })

        return {
          created: false,
        }
      }
    },

    async authenticateWithGoogle(ctx) {
      try {
        NProgress.start()
        ctx.loading = true
        const provider = new GoogleAuthProvider()

        provider.setCustomParameters({
          prompt: 'consent',
          display: 'popup',
        })

        const userCredential = await signInWithPopup(auth, provider)
        const { user } = userCredential

        // Don't re-create the user profile, if the the user
        // already has a profile doc already.
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)

        if (!docSnap.exists()) {
          const profile = await this.addUserToUsersCollectionGgoogle(user)

          if (!profile.created) {
            console.log('something went wrong')
            return
          }
        }

        //Set user data to state management.
        await this.router.push('/account/publicprofile')
        ctx.loading = false
      } catch ({ ...error }) {
        NProgress.done()
        ctx.loading = false
        //Make sure user doesn't exists with that email.
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert('User already exists...')
        }
      }
    },

    async logout() {
      await signOut(auth)
      this.router.push('/')
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
