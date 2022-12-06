<template>
  <slot />
</template>

<script setup>
let auth = useAuthStore()

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
