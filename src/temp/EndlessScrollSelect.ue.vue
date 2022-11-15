<template>
  <v-card color="transparent" flat class="d-flex flex-column fill-height">
    <v-card-actions>
      <v-row density="compact" dense>
        <v-col cols="8">
          <v-autocomplete
            v-model:search="search"
            placeholder="SELECCIONAR PRODUCTO"
            :items="people"
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

const search = ref('')

// Define batch stepper number.
const batchScrollStepper = ref(20)

//Next branch to iterate
const nextBatch = ref(null)

// Current batch size, default is batchScrollStepper value.
const currentBatchStep = ref(batchScrollStepper.value)

// Calculate max batches available.
const maxIterableBatches = computed(() =>
  Math.ceil(totalProducts.value / batchScrollStepper.value)
)

// Indicates if the last batch has been loaded.
const lastBatchReached = computed(
  () => maxIterableBatches.length >= currentBatchStep.value
)

//  All available products
const { products } = billingStore

// Total products
const totalProducts = computed(() => products.length)

// Indicates if we are still on the first default batch step.
const isFirstBatch = computed(
  () => batchScrollStepper.value === currentBatchStep.value
)

// Search product names or fallback to currentBatchStep.
const filteredProducts = computed(() => {
  let productsFound = products.filter(product =>
    product.fullName
      .toString()
      .toLowerCase()
      .includes(search.value.toLowerCase())
  )

  return productsFound.slice(0, currentBatchStep.value)
})

function resetCurrentBatchStep() {
  currentBatchStep.value = batchScrollStepper.value
}

function onIntersect() {
  if (isFirstBatch.value || lastBatchReached.value) return

  currentBatchStep.value += batchScrollStepper.value
  nextBatch.value = currentBatchStep.value + batchScrollStepper.value

  return products.slice(0, nextBatch.value)
}

watch(
  () => search.value,
  (newValue, oldValue) => {
    if (!newValue && oldValue) resetCurrentBatchStep()
  }
)
</script>
