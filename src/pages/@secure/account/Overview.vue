<template>
  <VList bgColor="transparent">
    <VListItem
      class="text-teal-lighten-4"
      title="Account Balance"
      subtitle="$ 0"
    >
    </VListItem>
  </VList>

  <VDivider />
  <VContainer fluid>
    <VAlert
      title="Accounts"
      icon="mdi-bank"
      border="start"
      border-color="deep-purple accent-4"
      elevation="2"
      color="#2e3640"
      class="mt-n2"
    >
      You don't have any account plans assigned.
      <div class="d-flex">
        <VBtn
          @click="$router.push({ path: '/account/createaccount' })"
          color="#22272e"
          size="small"
          class="mt-4"
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
