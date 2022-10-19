<template>
  <tbody>
    <tr class="fill-height" v-for="(item, i) in data.searchTableData" :key="i">
      <td v-for="col in isVisibleHeadersFlat">
        {{ item[col] }}
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
    type: Array,
    default: () => [],
  },
})

const { isVisibleHeadersFlat } = toRefs(props.data)
</script>
