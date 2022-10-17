<template>
  <VCardActions class="pa-0 ma-0">
    <VCardTitle class="pa-0 ma-0" primary-title>
      {{ data.title }}
    </VCardTitle>
    <VSpacer />
    <BaseTableToolbarMenuOptions
      v-for="option in data.ToolbarMenuOptions"
      :option="option"
    ></BaseTableToolbarMenuOptions>
  </VCardActions>
</template>

<script setup>
defineOptions({
  name: 'BaseTableToolbar',
})

const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})
</script>
