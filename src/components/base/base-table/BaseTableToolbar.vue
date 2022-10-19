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
    type: Array,
    default: () => [],
  },
})

const { tableHeaders, isSearchableHeadersEmpty, isVisibleHeadersEmpty } =
  toRefs(props.data)

const menus = ref([
  {
    icon: '$mdiViewColumnOutline',
    tooltip: 'Visible columns',
    title: 'Display columns',
    subtitle: {
      visible: isVisibleHeadersEmpty,
      text: 'Select one or more columns to show',
    },
    data: { headers: tableHeaders, model: 'visible' },
  },
  {
    icon: '$mdiFilterVariant',
    tooltip: 'Searchable columns',
    title: 'Search columns',
    subtitle: {
      visible: isSearchableHeadersEmpty,
      text: 'Select one ore more columns to search',
    },
    data: { headers: tableHeaders, model: 'searchable' },
  },
])
</script>
