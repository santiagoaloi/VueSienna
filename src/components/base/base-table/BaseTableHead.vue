<template>
  <thead>
    <tr>
      <th v-for="header in headers.value" class="text-left header-background">
        {{ header.alias }}
      </th>
    </tr>
  </thead>
</template>

<script setup>
const props = defineProps({
  headers: {
    type: Array,
    default: () => [],
  },
})
</script>
