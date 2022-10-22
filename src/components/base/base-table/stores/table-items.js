export const useTableItems = props => {
  let sortHeader = $ref('')
  let searchField = $ref('')
  let title = props.title
  let headers = props.headers
  let items = props.items

  const isSearchFieldDisabled = $computed(
    () => isSearchableHeadersEmpty || isVisibleHeadersEmpty
  )
  const isSearchResultsEmpty = $computed(() => !filteredData.length)

  const allHeaders = $computed(() => headers.flatMap(h => h.name))

  const searchableTableHeaders = $computed(() =>
    headers.filter(h => h.isSearchable).flatMap(h => h.name)
  )
  const visibleHeaders = $computed(() => headers.filter(h => h.isVisible))

  const visibleTableHeaders = $computed(() =>
    headers.filter(h => h.isVisible).flatMap(h => h.name)
  )
  const isVisibleHeadersEmpty = $computed(() => !!!visibleHeaders.length)

  const isSearchableHeadersEmpty = $computed(
    () => !searchableTableHeaders.length
  )

  const filteredData = $computed(() => {
    let data = items

    data = data.filter(row =>
      isSearchableHeadersEmpty
        ? allHeaders
        : searchableTableHeaders
            .map(header => row[header])
            .some(value =>
              value.toString().toLowerCase().includes(searchField.toLowerCase())
            )
    )
    let h = sortHeader

    if (h) {
      const order = sortOrders[h]
      data = data.slice().sort((a, b) => {
        a = a[h]
        b = b[h]
        return (a === b ? 0 : a > b ? 1 : -1) * order
      })
    }

    return data
  })

  const sortOrders = $ref(
    visibleTableHeaders.reduce((o, header) => ((o[header] = 1), o), {})
  )

  function sortBy(header) {
    sortHeader = header
    sortOrders[header] *= -1
  }

  return reactive({
    sortBy,
    title: $$(title),
    headers: $$(headers),
    sortHeader: $$(sortHeader),
    sortOrders: $$(sortOrders),
    allHeaders: $$(allHeaders),
    searchField: $$(searchField),
    filteredData: $$(filteredData),
    visibleHeaders: $$(visibleHeaders),
    visibleTableHeaders: $$(visibleTableHeaders),
    isSearchResultsEmpty: $$(isSearchResultsEmpty),
    isVisibleHeadersEmpty: $$(isVisibleHeadersEmpty),
    isSearchFieldDisabled: $$(isSearchFieldDisabled),
    searchableTableHeaders: $$(searchableTableHeaders),
    isSearchableHeadersEmpty: $$(isSearchableHeadersEmpty),
  })
}
