<template>
  <v-card color="#323a44">
    {{ product }}
    <v-card-text>
      <v-autocomplete
        v-model="product"
        return-object
        :items="products"
        item-title="name"
        label="Products"
        :filter-keys="['raw.name', 'raw.brand']"
        filter-mode="some"
        @input="doSomething"
      >
      </v-autocomplete>
    </v-card-text>
  </v-card>
</template>

<script setup>
const product = $ref([])
const products = ref([
  { name: 'Macbook', brand: 'Apple', id: 1 },
  { name: 'iPad', brand: 'Apple', id: 2 },
  { name: 'iPhone', brand: 'Apple', id: 3 },
  { name: 'Galaxy 1', brand: 'Samsung', id: 4 },
  { name: 'Galaxy 2', brand: 'Samsung', id: 5 },
  { name: 'every', brand: 'every', id: 6 },
])

watch(
  () => product,
  (newValue, oldValue) => {
    console.log(product)
  }
)
</script>
