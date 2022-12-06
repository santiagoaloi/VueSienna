<template>
  <section id="SecureLayout" v-show="auth.profile">
    <SDrawer />
    <SAppView />
  </section>
</template>

<script setup>
const auth = useAuthStore()
</script>
