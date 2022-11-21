<template>
  <VTextField
    :disabled="isSearchFieldDisabled"
    prepend-inner-icon="$mdiMagnify"
    placeholder="Search..."
    v-model="searchField"
    clearable
  />
</template>

<script setup>
defineOptions({
  name: 'BaseTableSearchField',
})

let props = defineProps({
  data: {
    type: [Array, Object],
    default: () => [] || {},
  },
})

let { isSearchFieldDisabled, searchField } = toRefs(props.data)
</script>
