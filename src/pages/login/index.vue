<template>
  <splitView col="4" src="bg5.svg">
    <skriptag-title v-once class="mb-8" small>
      <template #text> Secure login to </template>
    </skriptag-title>
    <LoginButtons />
  </splitView>
</template>

<script setup>
defineOptions({
  name: 'Login',
})
</script>
