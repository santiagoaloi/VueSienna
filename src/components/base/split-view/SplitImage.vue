<template>
  <img :src="src" />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: '',
  },
})
</script>
