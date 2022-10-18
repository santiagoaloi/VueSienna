<template>
  <VCardActions class="no-gutters">
    <VCardTitle class="no-gutters">
      {{ data.title.value }}
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

const menus = ref([
  {
    icon: '$mdiViewColumnOutline',
    tooltip: 'Visible columns',
    title: 'Display columns',
    subtitle: {
      visible: props.data.isVisibleHeadersEmpty,
      text: 'Select one or more columns to show',
    },
    data: { headers: props.data.tableHeaders, model: 'visible' },
  },
  {
    icon: '$mdiFilterVariant',
    tooltip: 'Searchable columns',
    title: 'Search columns',
    subtitle: {
      visible: props.data.isSearchableHeadersEmpty,
      text: 'Select one ore more columns to search',
    },
    data: { headers: props.data.tableHeaders, model: 'searchable' },
  },
])
</script>
