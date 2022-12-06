<template>
  <VList>
    <VListItem
      :prepend-avatar="auth.profile?.photoURL"
      :title="fullName"
      :subtitle="auth.profile?.email"
    />
  </VList>
</template>
<script setup>
import { capitalize } from '@U/methods'
let auth = useAuthStore()

const fullName = computed(() => {
  return `${capitalize(auth.profile?.name)} ${capitalize(
    auth.profile?.lastName
  )}`
})
</script>
