<template>
  <v-card class="overflow-visible" min-height="300" color="#323a44">
    <v-card-text>
      <span class="pa-4">
        <div>
          <code> searchable keys: {{ searchableKeys }} </code>
        </div>
        <div>
          <code> return-object: {{ isReturnObject }} </code>
        </div>
        <div>
          <code> Selected-item: {{ getSelectedItem() }} </code>
        </div>
      </span>

      <v-menu attach class="overflow-visible">
        <template v-slot:activator="{ props }">
          <v-text-field v-model="search" color.trim="primary" v-bind="props">
          </v-text-field>
        </template>
        <v-list v-model:selected="selectedItem">
          <template v-for="(item, index) in filteredItems" :key="index">
            <v-list-item :value="item">
              <v-list-item-title>{{ getItemText(item) }}</v-list-item-title>
            </v-list-item>
          </template>
        </v-list>
      </v-menu>

      <!-- <v-autocomplete :items="items" item-title="name"></v-autocomplete> -->
    </v-card-text>
  </v-card>
</template>
<script setup>
import { isObject } from '@U/methods'

defineOptions({
  name: 'PlaygroundCustomAutocomplete',
})

const product = ref({ name: 'nuevo producto' })
const items = ref([
  { name: 'Macbook', brand: 'Apple', id: 1 },
  { name: 'iPad', brand: 'Apple', id: 2, disable: true },
  { name: 'Galaxy 5', brand: 'Samsung', id: 3 },
  { name: 'Galaxy 1', brand: 'Samsung', id: 4 },
  { name: 'Galaxy 2', brand: 'Samsung', id: 5 },
  { name: 'every', brand: 'every', id: 6 },
  // 1, 2, 3,
])

const itemTitle = ref()
const itemText = ref('')
const itemValue = ref('')

const selectedItem = ref([])
const search = ref('')

const searchableKeys = ref(['id'])

const isSearcheableKeysEmpty = computed(() => {
  return !!!searchableKeys.value.length
})
const isReturnObject = ref(false)

const filteredItems = computed(() => {
  let itemsFound = items.value.filter(obj => {
    const allKeys = Object.values(obj)

    const getSelectedKeyValue = Object.entries(obj).map(([key, value]) => {
      if (searchableKeys.value.includes(key)) {
        console.log(value)
        return [value]
      }
    })

    const keys = isSearcheableKeysEmpty.value ? allKeys : getSelectedKeyValue

    return keys.some(value =>
      value.toString().toLowerCase().includes(search.value.toLowerCase())
    )
  })
  return itemsFound.slice(0, currentBatchStep.value)
})

function getItemText(item) {
  if (itemText.value) {
    return item[itemText.value]
  }
  return Object.values(item)[0]
}

function getSelectedItem() {
  // if (isReturnObject.value) {
  //   return selectedItem.value
  // }
  return Object.values(selectedItem.value)
}

// Define batch stepper number.

const batchScrollStepper = ref(20)

//Next branch to iterate
const nextBatch = ref(null)

// Current batch size, default is batchScrollStepper value.
const currentBatchStep = ref(batchScrollStepper.value)
</script>
<route lang="yaml">
meta:
  description: Autocomplete demo on how to disable list items and clear field after item selection.
</route>
