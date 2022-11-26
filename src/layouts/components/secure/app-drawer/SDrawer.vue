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
          title: 'Overview 2',
          value: 'Overview 2',
          to: '/account/overviewtwo',
          prependIcon: 'mdi-book-open-page-variant-outline',
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
