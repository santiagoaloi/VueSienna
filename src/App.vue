<template>
  <AuthProvider>
    <VApp :theme="currentTheme">
      <GAppBar />
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <VFadeTransition mode="out-in">
            <component :is="Component" />
          </VFadeTransition>
        </template>
      </router-view>
    </VApp>
  </AuthProvider>
</template>

<script setup>
// Pinia appStore module is persisted.
// currentTheme values are light/dark
const { currentTheme } = toRefs(useAppStore())
</script>
