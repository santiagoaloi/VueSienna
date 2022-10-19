<template>
  <thead>
    <tr>
      <th v-for="header in headers" class="text-left header-background">
        {{ header.alias }}
      </th>
    </tr>
  </thead>
</template>

<script setup>
defineOptions({
  name: 'BaseTableHead',
})

const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
})
</script>
