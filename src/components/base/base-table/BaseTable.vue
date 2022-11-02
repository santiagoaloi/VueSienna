<template>
  <VCard color="transparent" flat class="base-table-wrapper">
    <BaseTableToolbar :data="table" />
    <BaseTableSearchField :data="table" />
    <BaseTableView :data="table" />
    <v-card-actions class="my-2">
      <BaseBtn>hello</BaseBtn>
    </v-card-actions>
  </VCard>
</template>

<script setup>
import { useTableItems } from './stores/table-items'

defineOptions({
  name: 'BaseTable',
})

//  globals
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

  dense: {
    type: Boolean,
    default: false,
  },
})

// composables & stores
const table = useTableItems(props)

const tableCompact = $computed(() => {
  return table.tableOptions.compact ? '34px' : '45px'
})

const tableBordered = $computed(() => {
  return table.tableOptions.bordered
    ? `1px dotted rgba(var(--v-border-color), var(--v-border-opacity))`
    : 'inherit'
})
</script>

<style scoped>
table > thead > tr > th {
  height: v-bind(tableCompact) !important;
}

table > thead > tbody,
.v-table__wrapper tr > td {
  height: v-bind(tableCompact) !important;
}

.v-table th {
  cursor: grab;
}
.v-table th:active {
  color: rgb(209, 203, 233);
  cursor: grabbing;
}

.v-table th.active .arrow {
  opacity: 1;
}

/* Base table column arrows */
.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid rgb(50, 230, 230);
}
</style>
