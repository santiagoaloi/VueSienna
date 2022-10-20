<template>
  <VTextField
    :disabled="isSearchFieldDisabled"
    prepend-inner-icon="$mdiMagnify"
    placeholder="Search..."
    v-model="searchField"
    clearable
  >
  </VTextField>
</template>

<script setup>
defineOptions({
  name: 'BaseTableSearchField',
})

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
})

const { isSearchFieldDisabled, searchField } = toRefs(props.data)
</script>
