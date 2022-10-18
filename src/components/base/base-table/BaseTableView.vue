<template>
  <VCard class="fill-height" flat color="transparent">
    <VFadeTransition>
      <VTable
        v-if="
          !data.isSearchResultsEmpty.value && !data.isVisibleHeadersEmpty.value
        "
        class="base-table"
        fixed-header
        height="100%"
      >
        <BaseTableHead :headers="data.visibleHeaders" />
        <BaseTableBody :data="data"> </BaseTableBody>
      </VTable>
    </VFadeTransition>

    <!-- Only shows when table has no results or no columns are selected -->
    <BaseTableNoData />
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
</script>
