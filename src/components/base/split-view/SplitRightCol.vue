<template>
  <VCol class="split-col-img" v-bind="{ ...config }" cols="12">
    <slot />
  </VCol>
</template>
<script setup>
let props = defineProps({
  right: {
    type: Boolean,
    default: false,
  },

  col: {
    type: [Number, String],
    default: 6,
  },
})

let { smAndDown } = useDisplay()

let config = reactive({
  colOrder: computed(() => {
    return !props.right || !smAndDown ? '12' : '-1'
  }),
  md: computed(() => {
    return 12 - props.col
  }),
})
</script>
