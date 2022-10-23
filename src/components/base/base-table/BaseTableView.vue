<template>
  <VCard class="fill-height bg-transparent" flat>
    <template v-if="!isSearchResultsEmpty && !isVisibleHeadersEmpty">
      <VTable class="base-table" fixed-header height="100%">
        <BaseTableHead :data="data" />
        <BaseTableBody :data="data" />
      </VTable>
    </template>

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
    type: [Array, Object],
    default: () => [] || {},
  },
})

const { isSearchResultsEmpty, isVisibleHeadersEmpty, isVisibleHeaders } =
  toRefs(props.data)
</script>
