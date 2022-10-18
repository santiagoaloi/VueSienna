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

        <tbody>
          <tr
            class="fill-height"
            v-for="(item, i) in data.searchTableData.value"
            :key="i"
          >
            <td v-for="col in data.visibleHeadersFlat.value">
              {{ item[col] }}
            </td>
          </tr>
        </tbody>
      </VTable>
    </VFadeTransition>

    <!-- Only shows when table has no results or no columns are selected -->
    <BaseTableNoData />
  </VCard>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>
