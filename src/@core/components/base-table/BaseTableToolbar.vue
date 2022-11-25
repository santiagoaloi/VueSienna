<template>
  <VCardActions class="no-gutters">
    <VCardTitle v-text="`${data.title}`" class="no-gutters" />
    <VSpacer />
    <BaseTableMenus v-for="menu in menus" :menu="menu" />
  </VCardActions>
</template>

<script setup>
defineOptions({
  name: 'BaseTableToolbar',
})

let props = defineProps({
  data: {
    type: [Array, Object],
    default: () => [] || {},
  },
})

let { isVisibleHeadersEmpty, isSearchableHeadersEmpty, headers, options } =
  toRefs(props.data)

let menus = $ref([
  {
    icon: '$mdiDotsVertical',
    tooltip: 'Table Options',
    title: 'Customize view',
    subtitle: {
      isVisible: false,
      text: null,
    },
    data: { array: options, model: 'val' },
  },

  {
    icon: '$mdiViewColumnOutline',
    tooltip: 'Visible Columns',
    title: 'Display columns',
    subtitle: {
      isVisible: isVisibleHeadersEmpty,
      text: 'Select one or more columns to show',
    },
    data: { array: headers, model: 'isVisible' },
  },
  {
    icon: '$mdiFilterVariant',
    tooltip: 'Searchable Columns',
    title: 'Search columns',
    subtitle: {
      isVisible: isSearchableHeadersEmpty,
      text: 'Select one ore more columns to search',
    },
    data: { array: headers, model: 'isSearchable' },
  },
])
</script>
