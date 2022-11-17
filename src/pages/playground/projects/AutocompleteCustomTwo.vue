<template>
  <v-card class="overflow-visible" min-height="300" color="#323a44">
    <v-card-text>
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
            <v-btn
              color="success"
              @click="isReturnObject = !isReturnObject"
              density="compact"
            >
              switch
            </v-btn>
          </code>
        </div>

        <div>
          <code>
            focus-on-select: {{ isFocusOnSelect }}
            <v-btn
              color="success"
              @click="focusOnSelect = !focusOnSelect"
              density="compact"
            >
              switch
            </v-btn>
          </code>
        </div>

        <div>
          <code>
            clear-search-on-select: {{ isClearSearchOnSelect }}
            <v-btn
              color="success"
              @click="clearSearchOnSelect = !clearSearchOnSelect"
              density="compact"
            >
              switch
            </v-btn>
          </code>
        </div>
      </span>

      <v-menu>
        <template v-slot:activator="{ props, isActive }">
          <v-text-field
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

        <v-list
          v-model:selected="selectedItem"
          @click:select="clickOnSelect"
          @update:selected="getSelectedItem()"
        >
          <v-list-item
            v-for="(item, index) in filteredItems"
            :key="index"
            :value="item"
          >
            <v-list-item-title>{{
              itemToString(item, itemText, 'hasDefault')
            }}</v-list-item-title>
            <v-list-item-subtitle>{{
              itemToString(item, itemSubtitle)
            }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-card-text>
  </v-card>
</template>
<script setup>
import { isObject } from '@/utils/methods'

const textFieldRef = ref(null)

const items = ref([
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

const placeholder = computed(() => {
  if (selectedItem.value.length) {
    return itemToString(selectedItem.value[0], itemTitle.value, 'hasDefault')
  }
  return 'Seleccionar'
})

const itemValue = ref('')
const itemTitle = ref('')
const itemText = ref('')
const itemSubtitle = ref('')

const isReturnObject = ref(false)
const focusOnSelect = ref(false)
const clearSearchOnSelect = ref(true)
const closeOnSelect = ref(false)

const selectedItem = ref([])
const search = ref('')

const searchableKeys = ref([])

const isSearcheableKeysEmpty = computed(() => {
  return !!!searchableKeys.value.length
})

const isClearSearchOnSelect = computed(() => {
  return !!clearSearchOnSelect.value
})

const isFocusOnSelect = computed(() => {
  return !!focusOnSelect.value
})

const isCloseOnSelect = computed(() => {
  return !!closeOnSelect.value
})

// Search product names or fallback to currentBatchStep.
const filteredItems = computed(() => {
  let itemsFound = items.value.filter(item => {
    if (isObject(item)) {
      const allKeys = Object.values(item)

      const getSelectedKeyValue = [item].reduce((acc, curr) => {
        let result = searchableKeys.value.map(key => {
          return curr[key]
        })
        return result
      }, [])

      const keys = isSearcheableKeysEmpty.value ? allKeys : getSelectedKeyValue

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

const batchScrollStepper = ref(20)

//Next branch to iterate
const nextBatch = ref(null)

// Current batch size, default is batchScrollStepper value.
const currentBatchStep = ref(batchScrollStepper.value)

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
