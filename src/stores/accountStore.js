/*
 * User profile related logic.
 */

export const useAccountStore = defineStore('account', {
  actions: {
    async updateProfile(payload) {
      try {
        const auth = useAuthStore()

        const profile = doc(db, 'users', auth.userId)

        await updateDoc(profile, {
          ...payload,
        })

        return {
          saved: true,
        }
      } catch ({ ...error }) {
        return {
          saved: false,
        }
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAccountStore, import.meta.hot))
