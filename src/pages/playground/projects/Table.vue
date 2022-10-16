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
              icon
              v-bind="props"
              size="x-small"
              variant="plain"
            >
              <v-icon icon="$mdiFilterVariant" />
              <v-tooltip location="left" activator="parent">
                Searchable cols
              </v-tooltip>
            </v-btn>
          </template>

          <v-card
            color="#323a44"
            flat
            class="mr-n3"
            min-width="300"
            max-height="300"
          >
            <v-card-title class="mb-n4"> Search columns </v-card-title>

            <VExpandTransition>
              <v-card-subtitle
                v-if="!isEmptySelectedHeaders"
                class="text-teal-accent-2"
              >
                Searching all columns
              </v-card-subtitle>
            </VExpandTransition>

            <div class="mb-3 mt-2">
              <v-checkbox
                v-for="header in tableHeaders"
                class="ml-3"
                hide-details
                density="compact"
                v-model="selectedHeaders"
                :label="header.alias"
                :value="header.name"
              />
            </div>
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

// Headers can only be strings or numbers.
const tableHeaders = $computed(() =>
  headers.filter(
    h => ['string', 'number'].includes(typeof h.alias) && h.alias !== ''
  )
)
// Get an array of header names only.
const tableHeadersFlat = $computed(() => tableHeaders.flatMap(h => h.name))

const isEmptySelectedHeaders = $computed(() => !!selectedHeaders.length)

const headers = $ref([
  { name: 'name', alias: 'Name' },
  { name: 'lastName', alias: 'Last Name' },
  { name: 'actions', alias: '' },
])

// By default all headers are searchable.
const selectedHeaders = $ref([])

const searchableHeaders = $computed(() =>
  selectedHeaders.length ? selectedHeaders : tableHeadersFlat
)

// Only selectedHeaders will be searched.
const searchWizards = $computed(() =>
  wizards.filter(row =>
    searchableHeaders
      .map(column => row[column])
      .some(name => name.toLowerCase().includes(searchQuery.toLowerCase()))
  )
)
</script>
