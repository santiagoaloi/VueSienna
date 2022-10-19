<template>
  <VCard color="transparent" flat class="base-table-wrapper">
    <!-- Table data toolbar (menu icons and title) -->
    <BaseTableToolbar :data="table" />

    <!-- Table data search field -->
    <VTextField
      :disabled="isSearchFieldDisabled"
      prepend-inner-icon="$mdiMagnify"
      placeholder="Search..."
      v-model="searchField"
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

const { isSearchFieldDisabled, searchField } = toRefs(table)

console.log(table)
</script>
