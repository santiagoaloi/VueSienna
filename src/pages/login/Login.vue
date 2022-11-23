<template>
  <SplitView col="4" src="x1.svg">
    <SkriptagTitle v-once class="mb-8" small>
      <template #text> Secure login to </template>
    </SkriptagTitle>
    <AuthProviders />

    <div class="d-flex align-center my-4">
      <BaseDivider class="mr-1" />
      <small> OR</small>
      <BaseDivider class="ml-1" />
    </div>

    <AuthProviderEmail />
  </SplitView>
</template>

<script setup>
defineOptions({
  name: 'Login',
})
</script>
