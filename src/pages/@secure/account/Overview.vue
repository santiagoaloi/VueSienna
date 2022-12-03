<template>
  <VDivider />
  <VContainer fluid>
    <VAlert
      title="Accounts"
      icon="mdi-bank"
      border="start"
      border-color="purple-accent-4"
      elevation="2"
      class="mt-n2"
    >
      You don't have any account plans assigned.
      <div class="d-flex">
        <VBtn
          @click="$router.push({ path: '/account/createaccount' })"
          size="small"
          class="my-4"
          >Create new account</VBtn
        >
      </div>
    </VAlert>
  </VContainer>
</template>

<script setup>
import { useAuthStore } from '@/stores/authenticationStore'

let auth = useAuthStore()
</script>
