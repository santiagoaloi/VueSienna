<template>
  <AuthProvider>
    <VApp :theme="currentTheme">
      <GAppBar />
      <router-view v-slot="{ Component }">
        <template v-if="Component">
          <VFadeTransition>
            <component :is="Component" />
          </VFadeTransition>
        </template>
      </router-view>
      <GSnackbar />
    </VApp>
  </AuthProvider>
</template>

<script setup>
// Pinia appStore module is persisted.
// currentTheme values are light/dark
const { currentTheme } = toRefs(useAppStore())
</script>
