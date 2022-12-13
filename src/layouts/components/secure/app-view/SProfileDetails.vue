<template>
  <v-sheet color="transparent" min-width="260" flat class="right-border">
    <VList bg-color="transparent">
      <VListItem
        :prepend-avatar="auth.profile?.photoURL"
        :title="fullName"
        :subtitle="auth.profile?.email"
      />
    </VList>
  </v-sheet>
</template>
<script setup>
let auth = useAuthStore()

const fullName = computed(() => {
  return `${capitalize(auth.profile?.name)} ${capitalize(
    auth.profile?.lastName
  )}`
})
</script>
