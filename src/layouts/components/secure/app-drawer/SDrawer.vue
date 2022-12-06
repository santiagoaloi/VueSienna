<template>
  <VNavigationDrawer v-model="app.drawer">
    <template v-slot:prepend>
      <SDrawerNavTop />
    </template>

    <VDivider />

    <SDrawerNav />
    <template v-slot:append>
      <SDrawerNavBottom />
    </template>
  </VNavigationDrawer>
</template>
<script setup>
import { useAppStore } from '@/stores/appStore'

let app = useAppStore()
</script>
