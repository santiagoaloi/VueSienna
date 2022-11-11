export const useTableItems = props => {
  let sortHeader = $ref('')
  let searchField = $ref('')

  const options = $ref([
    { name: 'compact', alias: 'Compact', val: false },
    { name: 'headersFixed', alias: 'Fixed Headers', val: false },
    { name: 'bordered', alias: 'Bordered', val: false },
  ])

  let title = props.title
  let headers = props.headers
  let items = props.items

  // Make headers independent per each base-table
  // in case same headers array are shared across multiple tables
  // in the same SFC.

  // Causing issues, refactor.

  // let headers = props.headers.map(h => {
  //   return { ...h }
  // })

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

  function sortBy(header) {
    sortHeader = header
    sortOrders[header] *= -1
  }

  const sortOrders = $ref(
    visibleTableHeaders.reduce(
      (headers, header) => ((headers[header] = 1), headers),
      {}
    )
  )

  const tableOptions = $computed(() => {
    return options.reduce(
      (options, option) => ({ [option.name]: option.val, ...options }),
      {}
    )
  })

  return reactive({
    sortBy,
    options: $$(options),
    tableOptions: $$(tableOptions),
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
