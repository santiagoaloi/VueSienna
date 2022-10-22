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

const props = defineProps({
  data: {
    type: [Array, Object],
    default: () => [] || {},
  },
})

const { visibleTableHeaders } = toRefs(props.data)
</script>
