<template>
  <div class="g-appbar-switch-wrapper">
    <ThemeSwitch
      title="Switch theme"
      class="d-flex text-white"
      v-model="currentTheme"
    />
  </div>
</template>
<script setup>
// Theme logic
const { currentTheme } = toRefs(useAppStore())
</script>
