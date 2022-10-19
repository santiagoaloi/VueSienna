export const useTableItems = props => {
  //TODO: reactivity transforms...

  const title = $ref(props.title)

  const searchQuery = $ref('')

  const allHeaders = $computed(() => tableHeaders.flatMap(h => h.name))

  const tableHeaders = $computed(() =>
    props.headers.filter(h => ['string', 'number'].includes(typeof h.name))
  )

  const tableHeadersFlat = $computed(() =>
    tableHeaders.filter(h => h.isSearchable).flatMap(h => h.name)
  )

  const searchTableData = $computed(() =>
    props.items.filter(row =>
      isSearchableHeadersEmpty
        ? allHeaders
        : tableHeadersFlat
            .map(h => row[h])
            .some(v => v.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  )

  const isVisibleHeaders = $computed(() =>
    tableHeaders.filter(h => h.isVisible)
  )

  // Headers can only be strings or numbers.
  const isVisibleHeadersFlat = $computed(() =>
    tableHeaders.filter(h => h.isVisible).flatMap(h => h.name)
  )

  const isSearchResultsEmpty = $computed(() => !searchTableData.length)

  const isVisibleHeadersEmpty = $computed(() => !isVisibleHeaders.length)

  const isSearchableHeadersEmpty = $computed(() => !tableHeadersFlat.length)

  const isSearchFieldDisabled = $computed(
    () => isSearchableHeadersEmpty || isVisibleHeadersEmpty
  )

  return reactive({
    title,
    allHeaders: $$(allHeaders),
    searchQuery: $$(searchQuery),
    tableHeaders: $$(tableHeaders),
    isVisibleHeaders: $$(isVisibleHeaders),
    searchTableData: $$(searchTableData),
    tableHeadersFlat: $$(tableHeadersFlat),
    isVisibleHeadersFlat: $$(isVisibleHeadersFlat),
    isSearchResultsEmpty: $$(isSearchResultsEmpty),
    isVisibleHeadersEmpty: $$(isVisibleHeadersEmpty),
    isSearchFieldDisabled: $$(isSearchFieldDisabled),
    isSearchableHeadersEmpty: $$(isSearchableHeadersEmpty),
  })
}
