<template>
  <thead>
    <tr>
      <th
        @click="data.sortBy(key.name)"
        v-for="key in data.visibleHeaders"
        class="text-left header-background"
      >
        {{ key.alias }}
        <span
          class="arrow"
          :class="data.sortOrders[key.name] > 0 ? 'asc' : 'dsc'"
        >
        </span>
      </th>
    </tr>
  </thead>
</template>

<script setup>
defineOptions({
  name: 'BaseTableHead',
})

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})
</script>
