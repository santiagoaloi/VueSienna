<template>
  <VTabs
    height="65"
    :disabled="isRouting"
    slider-color="primary"
    v-model="currentItem"
  >
    <GAppBarTab />
  </VTabs>
</template>
<script setup>
const { isRouting } = toRefs(useAppStore())

// Navigation-Bar Logic
let currentItem = $ref('tab-Skriptag')
</script>
