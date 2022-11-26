<template>
  <VCard class="overflow-visible" min-height="300" color="#323a44">
    <VCardText>
      <span class="pa-4">
        <div>
          <code> searchable keys: {{ searchableKeys }} </code>
        </div>

        <div>
          <code> Selected-item: {{ selectedItem }} </code>
        </div>

        <div>
          <code> v-model: {{ itemValue }} </code>
        </div>

        <div>
          <code>
            return-object: {{ isReturnObject }}
            <VBtn
              color="success"
              @click="isReturnObject = !isReturnObject"
              density="compact"
            >
              switch
            </VBtn>
          </code>
        </div>

        <div>
          <code>
            focus-on-select: {{ isFocusOnSelect }}
            <VBtn
              color="success"
              @click="focusOnSelect = !focusOnSelect"
              density="compact"
            >
              switch
            </VBtn>
          </code>
        </div>

        <div>
          <code>
            clear-search-on-select: {{ isClearSearchOnSelect }}
            <VBtn
              color="success"
              @click="clearSearchOnSelect = !clearSearchOnSelect"
              density="compact"
            >
              switch
            </VBtn>
          </code>
        </div>
      </span>

      <VMenu>
        <template v-slot:activator="{ props, isActive }">
          <VTextField
            v-model="search"
            color.trim="primary"
            v-bind="props"
            ref="textFieldRef"
            :placeholder="placeholder"
            :append-inner-icon="
              isActive ? '$mdiMenuUpOutline' : '$mdiMenuDownOutline'
            "
          />
        </template>

        <VList
          v-model:selected="selectedItem"
          @click:select="clickOnSelect"
          @update:selected="getSelectedItem()"
        >
          <VListItem
            v-for="(item, index) in filteredItems"
            :key="index"
            :value="item"
          >
            <VListItemTitle>{{
              itemToString(item, itemText, 'hasDefault')
            }}</VListItemTitle>
            <VListItem-subtitle>{{
              itemToString(item, itemSubtitle)
            }}</VListItem-subtitle>
          </VListItem>
        </VList>
      </VMenu>
    </VCardText>
  </VCard>
</template>
<script setup>
import { isObject } from '@/utils/methods'

let textFieldRef = ref(null)

let items = ref([
  { name: 'Macbook', brand: 'Apple', id: 1 },
  { name: 'iPad', brand: 'Apple', id: 2, disable: true },
  { name: 'Galaxy 5', brand: 'Samsung', id: 3 },
  { name: 'Galaxy 1', brand: 'Samsung', id: 4 },
  { name: 'Galaxy 2', brand: 'Samsung', id: 5 },
  { name: 'every', brand: 'every', id: 6 },
  1,
  2,
  3,
])

let placeholder = computed(() => {
  if (selectedItem.value.length) {
    return itemToString(selectedItem.value[0], itemTitle.value, 'hasDefault')
  }
  return 'Seleccionar'
})

let itemValue = ref('')
let itemTitle = ref('')
let itemText = ref('')
let itemSubtitle = ref('')

let isReturnObject = ref(false)
let focusOnSelect = ref(false)
let clearSearchOnSelect = ref(true)
let closeOnSelect = ref(false)

let selectedItem = ref([])
let search = ref('')

let searchableKeys = ref([])

let isSearcheableKeysEmpty = computed(() => {
  return !!!searchableKeys.value.length
})

let isClearSearchOnSelect = computed(() => {
  return !!clearSearchOnSelect.value
})

let isFocusOnSelect = computed(() => {
  return !!focusOnSelect.value
})

let isCloseOnSelect = computed(() => {
  return !!closeOnSelect.value
})

// Search product names or fallback to currentBatchStep.
let filteredItems = computed(() => {
  let itemsFound = items.value.filter(item => {
    if (isObject(item)) {
      let allKeys = Object.values(item)

      let getSelectedKeyValue = [item].reduce((acc, curr) => {
        let result = searchableKeys.value.map(key => {
          return curr[key]
        })
        return result
      }, [])

      let keys = isSearcheableKeysEmpty.value ? allKeys : getSelectedKeyValue

      return keys
        ? keys.some(value =>
            value.toString().toLowerCase().includes(search.value.toLowerCase())
          )
        : search.value
        ? item == search.value
        : item
    }
    return item.toString().toLowerCase().includes(search.value.toLowerCase())
  })
  return itemsFound.slice(0, currentBatchStep.value)
})

function itemToString(item, value, hasDefault) {
  if (isObject(item)) {
    if (value) {
      if (Array.isArray(value)) {
        return value.map(i => item[i]).join(' ')
      }
      return item[value]
    }
    if (hasDefault) {
      return Object.values(item)[0]
    }
  }
  if (hasDefault) {
    return item
  }
}

function getSelectedItem() {
  let result = selectedItem.value[0]
  if (isReturnObject.value) {
    itemValue.value = result
    // return result;
  }
  if (!isReturnObject.value && isObject(result)) {
    itemValue.value = Object.values(result)[0]
    // return Object.values(result)[0];
  }
  if (!isObject(result)) {
    itemValue.value = result
  }
}

// Define batch stepper number.

let batchScrollStepper = ref(20)

//Next branch to iterate
let nextBatch = ref(null)

// Current batch size, default is batchScrollStepper value.
let currentBatchStep = ref(batchScrollStepper.value)

function clickOnSelect() {
  isClearSearchOnSelect.value ? (search.value = '') : ''
  isFocusOnSelect.value ? textFieldRef.value.focus() : ''
  // isCloseOnSelect.value ?
}
</script>
<route lang="yaml">
meta:
  title: Autocomplete (Facu)
  description: Autocomplete demo on how to disable list items and clear field after item selection.
  icon: '$mdiFormDropdown'
</route>
