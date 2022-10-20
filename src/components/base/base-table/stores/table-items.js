export const useTableItems = props => {
  const title = $ref(props.title)

  const searchField = $ref('')

  const sortKey = $ref('')

  const isSearchFieldDisabled = $computed(
    () => isSearchableHeadersEmpty || isVisibleHeadersEmpty
  )
  const isSearchResultsEmpty = $computed(() => !filteredData.length)

  const allHeaders = $computed(() => tableHeaders.flatMap(h => h.name))
  const tableHeaders = $computed(() =>
    props.headers.filter(h => ['string', 'number'].includes(typeof h.name))
  )
  const searchableTableHeaders = $computed(() =>
    tableHeaders.filter(h => h.isSearchable).flatMap(h => h.name)
  )
  const visibleHeaders = $computed(() => tableHeaders.filter(h => h.isVisible))

  // Headers can only be strings or numbers.
  const visibleTableColumns = $computed(() =>
    tableHeaders.filter(h => h.isVisible).flatMap(h => h.name)
  )
  const isVisibleHeadersEmpty = $computed(() => !!!visibleHeaders.length)

  const isSearchableHeadersEmpty = $computed(
    () => !searchableTableHeaders.length
  )

  const filteredData = $computed(() => {
    let data = props.items

    data = data.filter(row =>
      isSearchableHeadersEmpty
        ? allHeaders
        : searchableTableHeaders
            .map(h => row[h])
            .some(v =>
              v.toString().toLowerCase().includes(searchField.toLowerCase())
            )
    )
    const key = sortKey

    if (key) {
      const order = sortOrders[key]
      data = data.slice().sort((a, b) => {
        a = a[key]
        b = b[key]
        return (a === b ? 0 : a > b ? 1 : -1) * order
      })
    }

    return data
  })

  const sortOrders = $ref(
    visibleTableColumns.reduce((o, key) => ((o[key] = 1), o), {})
  )

  function sortBy(key) {
    console.log('hello from sortBy')
    console.log('key ' + key)

    sortKey = key
    sortOrders[key] *= -1
  }

  return reactive({
    title: $$(title),
    sortBy,
    sortKey: $$(sortKey),
    sortOrders: $$(sortOrders),
    allHeaders: $$(allHeaders),
    searchField: $$(searchField),
    tableHeaders: $$(tableHeaders),
    filteredData: $$(filteredData),
    visibleHeaders: $$(visibleHeaders),
    visibleTableColumns: $$(visibleTableColumns),
    isSearchResultsEmpty: $$(isSearchResultsEmpty),
    isVisibleHeadersEmpty: $$(isVisibleHeadersEmpty),
    isSearchFieldDisabled: $$(isSearchFieldDisabled),
    searchableTableHeaders: $$(searchableTableHeaders),
    isSearchableHeadersEmpty: $$(isSearchableHeadersEmpty),
  })
}
