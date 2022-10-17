<template>
  <BaseTable
    title="Search WIzards"
    :items="wizards"
    :headers="headers"
  ></BaseTable>
</template>

<script setup>
defineOptions({
  name: 'PlaygroundTable',
})

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

const headers = $ref([
  { name: 'name', alias: 'Name', visible: true, searchable: true },
  { name: 'lastName', alias: 'Last Name', visible: true, searchable: true },
])
</script>
