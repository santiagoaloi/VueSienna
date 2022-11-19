<template>
  <SplitView col="4" src="x1.svg">
    <SkriptagTitle v-once class="mb-8" small>
      <template #text> Secure login to </template>
    </SkriptagTitle>
    <LoginButtons />
    <LoginButtonEmail />
  </SplitView>
</template>

<script setup>
defineOptions({
  name: 'Login',
})
</script>
