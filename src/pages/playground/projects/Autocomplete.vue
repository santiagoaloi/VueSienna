<template>
  <VAutocomplete
    item-title="name"
    item-value="name"
    :items="items"
    v-model="select"
    v-model:search="search"
    cache-items
  >
  </VAutocomplete>
</template>

<script setup>
defineOptions({
  name: 'PlaygroundAutocomplete',
})

const search = $ref('')
const select = $ref([])
const items = $ref([])

watch(
  () => search,
  val => {
    val && querySelections(val)
  }
)

function querySelections(v) {
  items = wizards.filter(w => w.name.toLowerCase().includes(v))
}

const wizards = $ref([
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
</script>
