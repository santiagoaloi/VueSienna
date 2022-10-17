<template>
  <VCard color="transparent" flat class="d-flex flex-column fill-height px-11">
    <BaseTableToolbar :data="toolbarPayload"> </BaseTableToolbar>

    <VTextField
      :disabled="isSearchDisabled"
      prepend-inner-icon="$mdiMagnify"
      placeholder="Search..."
      v-model="searchQuery"
      clearable
    >
    </VTextField>

    <VCard class="fill-height" flat color="transparent">
      <VFadeTransition>
        <VTable
          v-if="!isSearchResultsEmpty && !isEmptyVisibleHeaders"
          class="pa-0 ma-0 fill-height bg-transparent"
          fixed-header
          height="100%"
        >
          <thead>
            <tr>
              <th
                v-for="header in visibleHeaders"
                class="text-left header-background"
              >
                {{ header.alias }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="fill-height" v-for="(item, i) in searchItems" :key="i">
              <td v-for="col in visibleHeadersFlat">
                {{ item[col] }}
              </td>
            </tr>
          </tbody>
        </VTable>
      </VFadeTransition>

      <BaseTableNoData />
    </VCard>
  </VCard>
</template>

<script setup>
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

const searchQuery = $ref('')

const searchableHeadersFlat = $computed(() =>
  tableHeaders
    .filter(header => header.searchable)
    .flatMap(header => header.name)
)

const visibleHeaders = $computed(() =>
  tableHeaders.filter(header => header.visible)
)

// Headers can only be strings or numbers.
const tableHeaders = $computed(() =>
  props.headers.filter(header =>
    ['string', 'number'].includes(typeof header.alias)
  )
)

const visibleHeadersFlat = $computed(() =>
  tableHeaders.filter(header => header.visible).flatMap(header => header.name)
)

const allHeaders = $computed(() => tableHeaders.flatMap(header => header.name))

// Only selected columns will be searchable.
const searchItems = $computed(() =>
  props.items.filter(row =>
    isEmptysearchableHeaders
      ? allHeaders
      : searchableHeadersFlat
          .map(column => row[column])
          .some(value =>
            value.toLowerCase().includes(searchQuery.toLowerCase())
          )
  )
)

//Getters
const isSearchResultsEmpty = $computed(() => !searchItems.length)
const isEmptyVisibleHeaders = $computed(() => !visibleHeaders.length)
const isEmptysearchableHeaders = $computed(() => !searchableHeadersFlat.length)
const isSearchDisabled = $computed(
  () => isEmptysearchableHeaders || isEmptyVisibleHeaders
)

const menuOptions = $ref([
  {
    icon: '$mdiViewColumnOutline',
    tooltip: 'Visible columns',
    title: 'Display columns',
    subtitle: {
      visible: $$(isEmptyVisibleHeaders),
      text: 'Select one or more columns to show',
    },
    data: { array: tableHeaders, model: 'visible' },
  },
  {
    icon: '$mdiFilterVariant',
    tooltip: 'Searchable columns',
    title: 'Search columns',
    subtitle: {
      visible: $$(isEmptysearchableHeaders),
      text: 'Select one ore more columns to search',
    },
    data: { array: tableHeaders, model: 'searchable' },
  },
])

const toolbarPayload = $ref({
  title: props.title,
  menuOptions,
})
</script>
