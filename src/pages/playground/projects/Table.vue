<template>
  <v-card color="transparent" flat class="d-flex flex-column fill-height px-11">
    <v-card-actions class="pa-0 ma-0">
      <v-card-title class="pa-0 ma-0" primary-title>
        Wizard directory
      </v-card-title>
      <VSpacer />
      <v-btn size="small" icon="$mdiFilterVariant" />
    </v-card-actions>
    <v-text-field
      v-model="searchQuery"
      placeholder="Search wizards..."
      hide-details
    />

    <v-card class="fill-height" flat color="transparent">
      <VTable
        class="pa-0 ma-0 fill-height bg-transparent"
        fixed-header
        fixed-footer
        height="100%"
      >
        <thead>
          <tr>
            <th v-for="name in headers" class="text-left header-background">
              {{ name }}
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
  name: 'Playground',
})

const searchQuery = $ref('')

const headers = $ref(['Name', 'Last Name', ''])

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


const searchWizards = computed(() => wizards.filter(wizard => {
  const { name, lastName } = wizard
  return [name, lastName].some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
})
</script>

<style scoped>
.header-background {
  background: #323a44 !important;
}
</style>
