<template>
  <v-card color="transparent" flat class="d-flex flex-column fill-height">
    <v-card-actions>
      <v-row density="compact" dense>
        <v-col cols="8">
          <v-autocomplete
            v-model:search="search"
            placeholder="SELECCIONAR PRODUCTO"
            :items="items"
            :filter-keys="['raw.name', 'raw.lastName']"
            return-object
            filter-mode="some"
            no-data-text="Sin resultados"
            density="compact"
            filled
            cache-items
            hide-details
            hide-no-data
            :menu-props="{
              closeOnContentClick: true,
              maxHeight: 400,
              openOnClick: false,
            }"
            ref="inputRef"
          >
            <template v-slot:append-item>
              <div class="text-teal pa-4" v-intersect="onIntersect">
                Cargando mas productos...
              </div>
            </template>
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script setup>
// Autocomplete infinite scroll logic.

let search = $ref('')

// Define batch stepper number.
let batchScrollStepper = $ref(20)

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

// Search item names or fallback to currentBatchStep.
let filteredItems = $computed(() => {
  let found = items.filter(item =>
    item.title.toString().toLowerCase().includes(search.toLowerCase())
  )

  return found.slice(0, currentBatchStep)
})

function resetCurrentBatchStep() {
  currentBatchStep = batchScrollStepper
}

function onIntersect() {
  if (isFirstBatch || lastBatchReached) return

  currentBatchStep += batchScrollStepper
  nextBatch = currentBatchStep + batchScrollStepper

  return items.slice(0, nextBatch)
}

watch(
  () => search,
  (newValue, oldValue) => {
    if (!newValue && oldValue) resetCurrentBatchStep()
  }
)
</script>
