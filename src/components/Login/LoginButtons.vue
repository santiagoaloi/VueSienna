<template>
  <Base-btn block :key="i" v-for="(button, i) in loginButtons" class="my-3">
    Signup with {{ button.name }}
  </Base-btn>

  <div class="d-flex align-center my-4">
    <v-divider class="grey darken-3" /> <span class="mx-3"> or </span>
    <v-divider class="grey darken-3" />
  </div>
  <Base-btn class="mt-2" block> Continue with email </Base-btn>
</template>

<script setup>
const loginButtons = [
  { name: 'github', icon: '', to: '' },
  { name: 'google', icon: '', to: '' },
]
</script>
