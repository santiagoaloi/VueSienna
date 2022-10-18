export const useTableItems = props => {
  const title = ref(props.title)
  const searchQuery = ref('')

  const allHeaders = computed(() =>
    tableHeaders.value.flatMap(header => header.name)
  )

  const tableHeaders = computed(() =>
    props.headers.filter(header =>
      ['string', 'number'].includes(typeof header.name)
    )
  )
  const tableHeadersFlat = computed(() =>
    tableHeaders.value
      .filter(header => header.searchable)
      .flatMap(header => header.name)
  )

  const searchTableData = computed(() =>
    props.items.filter(row =>
      isSearchableHeadersEmpty.value
        ? allHeaders.value
        : tableHeadersFlat.value
            .map(column => row[column])
            .some(value =>
              value.toLowerCase().includes(searchQuery.value.toLowerCase())
            )
    )
  )

  const visibleHeaders = computed(() =>
    tableHeaders.value.filter(header => header.visible)
  )

  // Headers can only be strings or numbers.
  const visibleHeadersFlat = computed(() =>
    tableHeaders.value
      .filter(header => header.visible)
      .flatMap(header => header.name)
  )

  const isSearchResultsEmpty = computed(() => !searchTableData.value.length)
  const isVisibleHeadersEmpty = computed(() => !visibleHeaders.value.length)
  const isSearchableHeadersEmpty = computed(
    () => !tableHeadersFlat.value.length
  )
  const isSearchFieldDisabled = computed(
    () => isSearchableHeadersEmpty.value || isVisibleHeadersEmpty.value
  )

  return {
    title,
    searchQuery,
    tableHeaders,
    tableHeadersFlat,
    searchTableData,
    visibleHeaders,
    visibleHeadersFlat,
    allHeaders,
    isSearchResultsEmpty,
    isVisibleHeadersEmpty,
    isSearchableHeadersEmpty,
    isSearchFieldDisabled,
  }
}
