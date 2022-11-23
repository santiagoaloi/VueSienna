<template>
  <thead>
    <Sortable @end="onEnd" itemKey="name" :list="visibleHeaders" tag="tr">
      <template #item="{ element }">
        <th
          @click="sortBy(element.name)"
          class="text-left table-header-background"
        >
          {{ element.alias }}
          <span
            class="arrow"
            :class="sortOrders[element.name] > 0 ? 'asc' : 'dsc'"
          >
          </span>
        </th>
      </template>
    </Sortable>
  </thead>
</template>

<script setup>
import { Sortable } from 'sortablejs-vue3'

defineOptions({
  name: 'BaseTableHead',
})

let props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

let { visibleHeaders, sortBy, sortOrders } = toRefs(props.data)

function onEnd(e) {
  // array, from , to
  moveItemInArray(props.data.headers, e.oldIndex, e.newIndex)
}

let moveItemInArray = (array, from, to) => {
  let item = array.splice(from, 1)[0]
  array.splice(to, 0, item)
}
</script>
