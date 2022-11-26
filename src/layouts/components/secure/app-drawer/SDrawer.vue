<template>
  <v-navigation-drawer
    width="280"
    permanent
    bottom
    temporary
    id="settings-drawer"
    v-model="app.drawer"
    position="fixed"
    hide-overlay
  >
    <v-list>
      <v-list-item
        :prepend-avatar="auth.userAvatar"
        :title="auth.userName"
        :subtitle="auth.userEmail"
      />
    </v-list>

    <VDivider />

    <VList
      item-props
      :items="[
        {
          title: 'Overview',
          value: 'overview',
          to: '/account/overview',
          prependIcon: 'mdi-bank',
        },
        {
          title: 'Accounts',
          value: 'Accounts',
          to: '/dashboard/accounts',
          prependIcon: 'mdi-book-open-page-variant-outline',
        },
        {
          title: 'Cards',
          value: 'Cards',
          to: '/dashboard/cards',
          prependIcon: 'mdi-credit-card-outline',
        },
      ]"
      density="compact"
      nav
    >
    </VList>
  </v-navigation-drawer>
</template>
<script setup>
import { useAppStore } from '@/stores/appStore'
import { useAuthStore } from '@/stores/authenticationStore'

let app = useAppStore()
let auth = useAuthStore()
</script>
