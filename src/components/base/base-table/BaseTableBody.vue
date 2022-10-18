<template>
  <tbody>
    <tr
      class="fill-height"
      v-for="(item, i) in data.searchTableData.value"
      :key="i"
    >
      <td v-for="col in data.visibleHeadersFlat.value">
        {{ item[col] }}
      </td>
    </tr>
  </tbody>
</template>
<script setup>
defineOptions({
  name: 'BaseTableView',
})

const props = defineProps({´
  data: {
    type: Array,
    default: () => [],
  },
})
</script>
