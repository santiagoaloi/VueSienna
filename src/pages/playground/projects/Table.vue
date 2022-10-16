<template>
  <v-card color="transparent" flat class="d-flex flex-column fill-height px-11">
    <v-card-actions class="pa-0 ma-0">
      <v-card-title class="pa-0 ma-0" primary-title>
        Wizard directory
      </v-card-title>
    </v-card-actions>
    <v-text-field
      prepend-inner-icon="$mdiMagnify"
      placeholder="Search Wizards"
      v-model="searchQuery"
      hide-details
      density="compact"
      class="mb-1"
    >
      <template v-slot:append-inner>
        <v-menu :close-on-click="true" :close-on-content-click="false">
          <template v-slot:activator="{ props }">
            <v-btn
              class="mt-n1"
              v-bind="props"
              size="x-small"
              icon="$mdiFilterVariant"
              variant="plain"
            />
          </template>

          <v-card
            class="mr-n3"
            min-width="300"
            max-height="300"
            color="dark-grey"
          >
            <v-checkbox
              class="ml-2"
              hide-details
              density="compact"
              v-for="header in tableHeaders"
              v-model="selectedHeaders"
              :label="header.alias"
              :value="header.name"
            />
          </v-card>
        </v-menu>
      </template>
    </v-text-field>

    <v-card class="fill-height" flat color="transparent">
      <VTable
        class="pa-0 ma-0 fill-height bg-transparent"
        fixed-header
        fixed-footer
        height="100%"
      >
        <thead>
          <tr>
            <th v-for="header in headers" class="text-left header-background">
              {{ header.alias }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="fill-height"
            v-for="wizard in searchWizards"
            :key="wizard.name"
          >
            <td>{{ wizard.name }}</td>
            <td>{{ wizard.lastName }}</td>
            <td class="text-center">
              <v-btn size="x-small" color="#323a44" icon="$mdiDotsVertical" />
            </td>
          </tr>
        </tbody>
      </VTable>
    </v-card>
  </v-card>
</template>

<script setup>
defineOptions({
  name: 'PlaygroundTable',
})

const items = $ref([
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
  'California',
  'Colorado',
  'Florida',
  'Georgia',
  'Texas',
  'Wyoming',
])

const searchQuery = $ref('')

const wizards = $ref([
  { name: 'Harry', lastName: 'Potter' },
  { name: 'Lord', lastName: 'Voldemort' },
  { name: 'Ron', lastName: 'Weasley' },
  { name: 'Gini', lastName: 'Weasley' },
  { name: 'Septimus', lastName: 'Weasley' },
  { name: 'William', lastName: 'Weasley' },
  { name: 'Percy', lastName: 'Weasley' },
  { name: 'George', lastName: 'Weasley' },
  { name: 'James', lastName: 'Potter' },
  { name: 'Lily', lastName: 'Potter' },
  { name: 'Severus', lastName: 'Snape' },
  { name: 'Draco', lastName: 'Malfoy' },
  { name: 'Lucius', lastName: 'Malfoy' },
  { name: 'Hermione', lastName: 'Granger' },
  { name: 'Albus', lastName: 'Dumbledore' },
  { name: 'Dean', lastName: 'Thomas' },
])

const tableHeaders = computed(() => {
  return headers.filter(
    h => ['string', 'number'].includes(typeof h.alias) && h.alias !== ''
  )
})

const tableHeadersFlat = computed(() => {
  return tableHeaders.value.flatMap(h => h.name)
})

const selectedHeaders = $ref(tableHeadersFlat)

const headers = $ref([
  { name: 'name', alias: 'Name' },
  { name: 'lastName', alias: 'Last Name' },
  { name: 'actions', alias: '' },
])

const searchWizards = computed(() =>
  wizards.filter(wizard => {
    const columns = selectedHeaders.length
      ? [...selectedHeaders]
      : [...tableHeadersFlat.value]

    return columns
      .map(col => wizard[col])
      .some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
  })
)
</script>

<style scoped>
.header-background {
  background: #323a44 !important;
}
</style>
