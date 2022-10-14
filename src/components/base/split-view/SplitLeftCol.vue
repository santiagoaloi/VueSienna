<template>
  <VCol :md="mdAndDown ? 12 : col" cols="12">
    <VContainer fluid class="px-11">
      <slot />
    </VContainer>
  </VCol>
</template>

<script setup>
defineProps({
  col: {
    type: [Number, String],
    default: 6,
  },
})

const { mdAndDown } = useDisplay()
</script>
