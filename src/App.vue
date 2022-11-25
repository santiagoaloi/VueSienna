<template>
  <VApp :theme="currentTheme">
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition mode="out-in">
          <component :is="Component" />
        </VFadeTransition>
      </template>
    </router-view>
  </VApp>
</template>

<script setup>
import { useAppStore } from '@S/appStore'
const { currentTheme } = toRefs(useAppStore())
</script>
