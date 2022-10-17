<template>
  <VBtn class="mt-n1" icon v-bind="props" size="x-small" variant="plain">
    <v-icon :icon="icon" />
    <VTooltip openDelay="800" activator="parent"> {{ tooltip }} </VTooltip>
  </VBtn>
</template>

<script setup>
defineOptions({
  name: 'BaseTableMenuButton',
})

const props = defineProps({
  tooltip: {
    type: Array,
    default: () => [],
  },
  icon: {
    type: Array,
    default: () => [],
  },
})
</script>
