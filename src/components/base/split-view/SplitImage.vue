<template>
  <VImg cover width="100%" :src="src"> <slot /></VImg>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: '',
  },
})
</script>
