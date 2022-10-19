export const useTableItems = props => {
  const title = $ref(props.title)

  const searchField = $ref('')
  const isSearchFieldDisabled = $computed(
    () => isSearchableHeadersEmpty || isVisibleHeadersEmpty
  )
  const isSearchResultsEmpty = $computed(() => !searchTableData.length)

  const allHeaders = $computed(() => tableHeaders.flatMap(h => h.name))
  const tableHeaders = $computed(() =>
    props.headers.filter(h => ['string', 'number'].includes(typeof h.name))
  )
  const searchableTableHeaders = $computed(() =>
    tableHeaders.filter(h => h.isSearchable).flatMap(h => h.name)
  )
  const isVisibleHeaders = $computed(() =>
    tableHeaders.filter(h => h.isVisible)
  )
  // Headers can only be strings or numbers.
  const visibleTableHeaders = $computed(() =>
    tableHeaders.filter(h => h.isVisible).flatMap(h => h.name)
  )
  const isVisibleHeadersEmpty = $computed(() => !isVisibleHeaders.length)

  const isSearchableHeadersEmpty = $computed(
    () => !searchableTableHeaders.length
  )

  const searchTableData = $computed(() =>
    props.items.filter(row =>
      isSearchableHeadersEmpty
        ? allHeaders
        : searchableTableHeaders
            .map(h => row[h])
            .some(v => v.toLowerCase().includes(searchField.toLowerCase()))
    )
  )

  return reactive({
    title,
    allHeaders: $$(allHeaders),
    searchField: $$(searchField),
    tableHeaders: $$(tableHeaders),
    searchTableData: $$(searchTableData),
    isVisibleHeaders: $$(isVisibleHeaders),
    visibleTableHeaders: $$(visibleTableHeaders),
    isSearchResultsEmpty: $$(isSearchResultsEmpty),
    isVisibleHeadersEmpty: $$(isVisibleHeadersEmpty),
    isSearchFieldDisabled: $$(isSearchFieldDisabled),
    searchableTableHeaders: $$(searchableTableHeaders),
    isSearchableHeadersEmpty: $$(isSearchableHeadersEmpty),
  })
}
