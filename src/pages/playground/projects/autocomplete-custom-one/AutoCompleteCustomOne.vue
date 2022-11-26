<template>
  <VCard class="overflow-visible" min-height="300" color="#323a44">
    <VCardText>
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

      <VMenu attach class="overflow-visible">
        <template v-slot:activator="{ props }">
          <VTextField v-model="search" color.trim="primary" v-bind="props" />
        </template>
        <VList v-model:selected="selectedItem">
          <template v-for="(item, index) in filteredItems" :key="index">
            <VListItem :value="item">
              <VListItemTitle>{{ getItemText(item) }}</VListItemTitle>
            </VListItem>
          </template>
        </VList>
      </VMenu>

      <!-- <VAutocomplete :items="items" item-title="name"></VAutocomplete> -->
    </VCardText>
  </VCard>
</template>
<script setup>
import { isObject } from '@U/methods'

defineOptions({
  name: 'playgroundCustomAutocomplete',
})

let product = ref({ name: 'nuevo producto' })
let items = ref([
  { name: 'Macbook', brand: 'Apple', id: 1 },
  { name: 'iPad', brand: 'Apple', id: 2, disable: true },
  { name: 'Galaxy 5', brand: 'Samsung', id: 3 },
  { name: 'Galaxy 1', brand: 'Samsung', id: 4 },
  { name: 'Galaxy 2', brand: 'Samsung', id: 5 },
  { name: 'every', brand: 'every', id: 6 },
  // 1, 2, 3,
])

let itemTitle = ref()
let itemText = ref('')
let itemValue = ref('')

let selectedItem = ref([])
let search = ref('')

let searchableKeys = ref(['id'])

let isSearcheableKeysEmpty = computed(() => {
  return !!!searchableKeys.value.length
})
let isReturnObject = ref(false)

let filteredItems = computed(() => {
  let itemsFound = items.value.filter(obj => {
    let allKeys = Object.values(obj)

    let getSelectedKeyValue = Object.entries(obj).map(([key, value]) => {
      if (searchableKeys.value.includes(key)) {
        console.log(value)
        return [value]
      }
    })

    let keys = isSearcheableKeysEmpty.value ? allKeys : getSelectedKeyValue

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

let batchScrollStepper = ref(20)

//Next branch to iterate
let nextBatch = ref(null)

// Current batch size, default is batchScrollStepper value.
let currentBatchStep = ref(batchScrollStepper.value)
</script>
<route lang="yaml">
meta:
  title: Autocomplete (Santi)
  description: Autocomplete demo on how to disable list items and clear field after item selection.
  icon: '$mdiFormDropdown'
</route>
