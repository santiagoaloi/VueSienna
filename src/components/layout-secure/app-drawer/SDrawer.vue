<template>
  <v-navigation-drawer
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
    <v-list>
      <v-list-item
        :prepend-avatar="auth.userAvatar"
        :title="auth.userName"
        :subtitle="auth.userEmail"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list
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
    </v-list>
  </v-navigation-drawer>
</template>
<script setup>
import { useAppStore } from '@@/appStore'
import { useAuthStore } from '@@/authenticationStore'

const app = useAppStore()
const auth = useAuthStore()
</script>
