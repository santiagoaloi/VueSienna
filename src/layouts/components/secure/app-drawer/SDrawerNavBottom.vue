<template>
  <div class="pa-2">
    <v-btn to="/logout" color="primary-button" block> Logout </v-btn>
    <div class="text-center">
      <small> Last login </small>
      <small> {{ lastLogin }} </small>
    </div>
  </div>
</template>

<script setup>
const auth = useAuthStore()

let lastLogin = auth.user.metadata.lastSignInTime
</script>
