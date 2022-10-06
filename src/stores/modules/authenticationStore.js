import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { auth, db } from '@/firebase'

export const useAuthStore = defineStore('authentication', {
  // Data
  state: () => ({
    user: null,
  }),

  getters: {
    //Computed
    isLoggedIn() {
      return this.user !== null
    },

    userName() {
      return this.user?.displayName
    },

    userEmail() {
      return this.user?.email
    },

    userAvatar() {
      return this.user?.photoURL
    },
  },

  actions: {
    async logout() {
      // Singout and route to login.
      signOut(auth)
      this.router.push('/login')
    },

    //Methods
    async saveCustomer(customer) {
      // Add a new document in collection "cities"
      await setDoc(doc(db, 'customers', 'newCustomer'), {
        ...JSON.parse(JSON.stringify(customer)),
      })
    },

    //Methods
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
        return {
          created: false,
        }
      }
    },

    async authenticateWithGoogle(ctx) {
      try {
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
          const profile = await addUserToUsersCollectionGgoogle(user)

          if (!profile.created) {
            console.log('something went wrong')
            return
          }
        }

        //Set user data to state management.
        this.user = userCredential.user
        ctx.loading = false
        return true
      } catch ({ ...error }) {
        ctx.loading = false
        //Make sure user doesn't exists with that email.
        if (error.code === 'auth/account-exists-with-different-credential') {
          alert('User already exists...')
        }
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
