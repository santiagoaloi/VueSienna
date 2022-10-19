export const useTableItems = props => {
  //TODO: reactivity transforms...

  const title = $ref(props.title)
  const searchQuery = $ref('')

  const allHeaders = $computed(() =>
    tableHeaders.flatMap(header => header.name)
  )

  const tableHeaders = $computed(() =>
    props.headers.filter(header =>
      ['string', 'number'].includes(typeof header.name)
    )
  )
  const tableHeadersFlat = $computed(() =>
    tableHeaders
      .filter(header => header.searchable)
      .flatMap(header => header.name)
  )

  const searchTableData = $computed(() =>
    props.items.filter(row =>
      isSearchableHeadersEmpty
        ? allHeaders
        : tableHeadersFlat
            .map(column => row[column])
            .some(v => v.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  )

  const visibleHeaders = $computed(() =>
    tableHeaders.filter(header => header.visible)
  )

  // Headers can only be strings or numbers.
  const visibleHeadersFlat = $computed(() =>
    tableHeaders.filter(header => header.visible).flatMap(header => header.name)
  )

  const isSearchResultsEmpty = $computed(() => !searchTableData.length)
  const isVisibleHeadersEmpty = $computed(() => !visibleHeaders.length)
  const isSearchableHeadersEmpty = $computed(() => !tableHeadersFlat.length)
  const isSearchFieldDisabled = $computed(
    () => isSearchableHeadersEmpty || isVisibleHeadersEmpty
  )

  return reactive({
    title,
    allHeaders: $$(allHeaders),
    searchQuery: $$(searchQuery),
    tableHeaders: $$(tableHeaders),
    visibleHeaders: $$(visibleHeaders),
    searchTableData: $$(searchTableData),
    tableHeadersFlat: $$(tableHeadersFlat),
    visibleHeadersFlat: $$(visibleHeadersFlat),
    isSearchResultsEmpty: $$(isSearchResultsEmpty),
    isVisibleHeadersEmpty: $$(isVisibleHeadersEmpty),
    isSearchFieldDisabled: $$(isSearchFieldDisabled),
    isSearchableHeadersEmpty: $$(isSearchableHeadersEmpty),
  })
}
