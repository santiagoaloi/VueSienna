<template>
  <slot />
</template>

<script setup>
let auth = useAuthStore()

// If the user is logged-in, this watcher will create
// a real-time snapshot of the user profile document.
// otherwise the listener will be killed (if ever started).
watch(
  () => auth.isLoggedIn,
  isLoggedIn => {
    let unsubscribe
    if (isLoggedIn) {
      const userProfile = doc(db, 'users', auth.userId)
      unsubscribe = onSnapshot(userProfile, snap => {
        auth.profile = snap.data()
      })
    } else {
      // Kill the listener.
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }
)
</script>
