<template>
  <tbody>
    <tr class="fill-height" v-for="(entry, i) in data.filteredData" :key="i">
      <td v-for="key in visibleTableColumns">
        {{ entry[key] }}
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

const { visibleTableColumns } = toRefs(props.data)
</script>
