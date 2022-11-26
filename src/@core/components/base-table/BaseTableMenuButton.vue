<template>
  <VBtn class="mt-n1" icon v-bind="props" size="x-small" variant="plain">
    <VIcon :icon="icon" />
    <VTooltip openDelay="800" activator="parent"> {{ tooltip }} </VTooltip>
  </VBtn>
</template>

<script setup>
defineOptions({
  name: 'BaseTableMenuButton',
})

let props = defineProps({
  tooltip: {
    type: [Array, Object],
    default: () => [] || {},
  },
  icon: {
    type: [Array, Object],
    default: () => [] || {},
  },
})
</script>
