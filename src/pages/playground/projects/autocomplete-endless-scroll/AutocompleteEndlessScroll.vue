<template>
  <VCard color="transparent" flat class="d-flex flex-column fill-height">
    <VCardActions>
      <VRow density="compact" dense>
        <VCol cols="8">
          <VAutocomplete
            v-model:search="search"
            :items="filteredItems"
            item-title="name"
            filled
            cache-items
            :menu-props="{
              maxHeight: 200,
            }"
          >
            <template v-slot:append-item>
              <div class="text-teal pa-4" v-intersect="onIntersect">
                Loading...
              </div>
            </template>
          </VAutocomplete>
        </VCol>
      </VRow>
    </VCardActions>
  </VCard>
</template>

<script setup>
let items = reactive([
  { id: 1, name: 'Harry', lastName: 'Potter', itemProps: { disabled: true } },
  { id: 2, name: 'Ron', lastName: 'Weasley', itemProps: { disabled: false } },
  { id: 3, name: 'Ginny', lastName: 'Weasley', itemProps: { disabled: false } },

  {
    id: 4,
    name: 'Lord',
    lastName: 'Voldemort',
    itemProps: { disabled: false },
  },
  {
    id: 5,
    name: 'Severus',
    lastName: 'Snape',
    itemProps: { disabled: false },
  },
  {
    id: 6,
    name: 'Albus',
    lastName: 'Dumbledore',
    itemProps: { disabled: false },
  },
])

// Autocomplete infinite scroll logic.

let search = $ref('')

// Define batch stepper number.
let batchScrollStepper = $ref(2)

//Next branch to iterate
let nextBatch = $ref(null)

// Current batch size, default is batchScrollStepper value.
let currentBatchStep = $ref(batchScrollStepper)

// Calculate max batches available.
let maxIterableBatches = $computed(() =>
  Math.ceil(totalItems / batchScrollStepper)
)

// Indicates if the last batch has been loaded.
let lastBatchReached = $computed(
  () => maxIterableBatches.length >= currentBatchStep
)

// Total items
let totalItems = $computed(() => items.length)

// Indicates if we are still on the first default batch step.
let isFirstBatch = $computed(() => batchScrollStepper === currentBatchStep)

function resetCurrentBatchStep() {
  currentBatchStep = batchScrollStepper
}

function onIntersect() {
  if (isFirstBatch || lastBatchReached) return

  currentBatchStep += batchScrollStepper
  nextBatch = currentBatchStep + batchScrollStepper

  return items.slice(0, nextBatch)
}

// Search item names or fallback to currentBatchStep.
let filteredItems = $computed(() => {
  let found = items.filter(item =>
    item.name.toString().toLowerCase().includes(search.toLowerCase())
  )

  return found.slice(0, currentBatchStep)
})

watch(
  () => search,
  (newValue, oldValue) => {
    if (!newValue && oldValue) resetCurrentBatchStep()
  }
)
</script>
<route lang="yaml">
meta:
  title: Autocomplete - lazy loading scroll
  description: Lazy loading concept.
  icon: '$mdiFormDropdown'
</route>
