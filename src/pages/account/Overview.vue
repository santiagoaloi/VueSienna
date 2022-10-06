<template>
  <v-list bgColor="transparent">
    <v-list-item
      class="text-teal-lighten-4"
      title="Account Balance"
      subtitle="$ 0"
    >
    </v-list-item>
  </v-list>

  <v-divider></v-divider>
  <v-container fluid>
    <v-alert
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
        <v-btn
          @click="$router.push({ path: '/account/createaccount' })"
          color="#22272e"
          size="small"
          class="mt-4"
          >Create new account</v-btn
        >
      </div>
    </v-alert>
  </v-container>
</template>

<script setup>
import { useAuthStore } from '@/stores/modules/authenticationStore'

const auth = useAuthStore()
</script>
<route lang="yaml">
meta:
  layout: secure
  requiresAuth: true
</route>
