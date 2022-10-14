<template>
  <VNavigationDrawer
    width="280"
    permanent
    color="#22272e"
    bottom
    temporary
    id="settings-drawer"
    v-model="app.drawer"
    disable-route-watcher
    position="fixed"
    hide-overlay
  >
    <VList>
      <VListItem
        :prepend-avatar="auth.userAvatar"
        :title="auth.userName"
        :subtitle="auth.userEmail"
      ></VListItem>
    </VList>

    <VDivider />

    <VList
      item-props
      :items="[
        {
          title: 'Overview',
          value: 'overview',
          to: '/dashboard/overview',
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
  </VNavigationDrawer>
</template>
<script setup>
import { useAppStore } from '@S/appStore'
import { useAuthStore } from '@S/authenticationStore'

const app = useAppStore()
const auth = useAuthStore()
</script>
