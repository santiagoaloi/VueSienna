<template>
  <VCardActions class="no-gutters">
    <VCardTitle class="no-gutters">
      {{ data.title }}
    </VCardTitle>
    <VSpacer />
    <BaseTableMenus v-for="menu in menus" :menu="menu" />
  </VCardActions>
</template>

<script setup>
defineOptions({
  name: 'BaseTableToolbar',
})

const props = defineProps({
  data: {
    type: [Array, Object],
    default: () => [] || {},
  },
})

const { headers, isSearchableHeadersEmpty, isVisibleHeadersEmpty } = toRefs(
  props.data
)

const menus = ref([
  {
    icon: '$mdiViewColumnOutline',
    tooltip: 'isVisible columns',
    title: 'Display columns',
    subtitle: {
      isVisible: isVisibleHeadersEmpty,
      text: 'Select one or more columns to show',
    },
    data: { headers, model: 'isVisible' },
  },
  {
    icon: '$mdiFilterVariant',
    tooltip: 'isSearchable columns',
    title: 'Search columns',
    subtitle: {
      isVisible: isSearchableHeadersEmpty,
      text: 'Select one ore more columns to search',
    },
    data: { headers, model: 'isSearchable' },
  },
])
</script>
