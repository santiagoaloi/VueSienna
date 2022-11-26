<template>
  <VRow no-gutters class="fill-height">
    <VCol class="fill-height">
      <BaseTable title="Search Wizards" :items="wizards" :headers="headers" />
    </VCol>

    <VCol class="fill-height">
      <BaseTable title="Search Celebs" :items="celebs" :headers="headers" />
    </VCol>
  </VRow>
</template>

<script setup>
defineOptions({
  name: 'playgroundSplitTable',
})

let celebs = $ref([
  { id: 1, name: 'Britney', lastName: 'Spears' },
  { id: 2, name: 'Arnold', lastName: 'Schwarzenegger' },
  { id: 3, name: 'Steve', lastName: 'Jobs' },
])

let wizards = $ref([
  { id: 1, name: 'Harry', lastName: 'Potter' },
  { id: 2, name: 'Lord', lastName: 'Voldemort' },
  { id: 3, name: 'Ron', lastName: 'Weasley' },
  { id: 4, name: 'Gini', lastName: 'Weasley' },
  { id: 5, name: 'Septimus', lastName: 'Weasley' },
  { id: 6, name: 'William', lastName: 'Weasley' },
  { id: 7, name: 'Percy', lastName: 'Weasley' },
  { id: 8, name: 'George', lastName: 'Weasley' },
  { id: 9, name: 'James', lastName: 'Potter' },
  { id: 10, name: 'Lily', lastName: 'Potter' },
  { id: 11, name: 'Severus', lastName: 'Snape' },
  { id: 12, name: 'Draco', lastName: 'Malfoy' },
  { id: 13, name: 'Lucius', lastName: 'Malfoy' },
  { id: 14, name: 'Hermione', lastName: 'Granger' },
  { id: 15, name: 'Albus', lastName: 'Dumbledore' },
  { id: 16, name: 'Dean', lastName: 'Thomas' },
])

let headers = $ref([
  { name: 'id', alias: 'Id', isVisible: true, isSearchable: true },
  { name: 'name', alias: 'Name', isVisible: true, isSearchable: true },
  { name: 'lastName', alias: 'Last Name', isVisible: true, isSearchable: true },
])
</script>
<route lang="yaml">
meta:
  title: 'Base table (multiple)'
  description: Tryout of multiple custom-made base table component.
  icon: '$mdiTable'
</route>
