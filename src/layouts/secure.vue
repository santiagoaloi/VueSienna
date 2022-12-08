<template>
  <section id="SecureLayout" v-if="auth.profile">
    <SDrawer />
    <SAppView />
  </section>
</template>

<script setup>
const auth = useAuthStore()
</script>
