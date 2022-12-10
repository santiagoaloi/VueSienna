<template>
  <VImg cover :src="src">
    <slot />
  </VImg>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: '',
  },
})
</script>
