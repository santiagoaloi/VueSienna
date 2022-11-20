<template>
  <tbody>
    <tr class="fill-height" v-for="(rowItem, i) in data.filteredData" :key="i">
      <td v-for="header in visibleTableHeaders">
        {{ rowItem[header] }}
      </td>
    </tr>
  </tbody>
</template>
<script setup>
defineOptions({
  name: 'BaseTableView',
})

let props = defineProps({
  data: {
    type: [Array, Object],
    default: () => [] || {},
  },
})

let { visibleTableHeaders } = toRefs(props.data)
</script>
