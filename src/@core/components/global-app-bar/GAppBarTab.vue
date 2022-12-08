<template>
  <VTab
    :ripple="false"
    v-for="tab in tabs"
    :key="tab.name"
    :value="'tab-' + tab.name"
    :to="tab.to"
  >
    {{ tab.name.toUpperCase() }}
  </VTab>
</template>
<script setup>
const store = useAuthStore()

const tabs = computed(() => {
  const loginName = store.isLoggedIn ? 'Profile' : 'Login'

  const tabs = [
    { name: 'Skriptag', to: '/', disabled: true },
    { name: 'Playground', to: '/playground', disabled: false },
    { name: loginName, to: '/login', disabled: false },
  ]

  return tabs
})
</script>
