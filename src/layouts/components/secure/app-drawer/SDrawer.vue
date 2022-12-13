<template>
  <VNavigationDrawer order="1" width="260" v-model="app.drawer">
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
