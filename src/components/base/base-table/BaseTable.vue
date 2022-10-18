<template>
  <VCard color="transparent" flat class="base-table-wrapper">
    <!-- Table data toolbar (menu icons and title) -->
    <BaseTableToolbar :data="table"> </BaseTableToolbar>

    <!-- Table data search field -->
    <VTextField
      :disabled="table.isSearchFieldDisabled"
      prepend-inner-icon="$mdiMagnify"
      placeholder="Search..."
      v-model="table.searchQuery"
      clearable
    >
    </VTextField>

    <BaseTableView :data="table" />
  </VCard>
</template>

<script setup>
import { useTableItems } from './stores/table-items'

defineOptions({
  name: 'BaseTable',
})

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  headers: {
    type: Array,
    default: () => [],
  },
  title: {
    type: [String, Number],
    default: '',
  },
})

const table = useTableItems(props)

console.log(table)
</script>
