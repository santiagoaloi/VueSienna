<template>
  <VCard class="fill-height" flat color="transparent">
    <VTable
      v-if="!isSearchResultsEmpty && !isVisibleHeadersEmpty"
      class="base-table"
      fixed-header
      height="100%"
    >
      <BaseTableHead :data="data" />
      <BaseTableBody :data="data" />
    </VTable>

    <!-- Only shows when table has no results or no columns are selected -->
    <BaseTableNoData v-else />
  </VCard>
</template>

<script setup>
defineOptions({
  name: 'BaseTableView',
})

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

const { isSearchResultsEmpty, isVisibleHeadersEmpty, isVisibleHeaders } =
  toRefs(props.data)
</script>
