<template>
  <VCol class="split-col-img justify-center" v-bind="{ ...config }" cols="12">
    <slot />
  </VCol>
</template>
<script setup>
const props = defineProps({
  right: {
    type: Boolean,
    default: false,
  },

  col: {
    type: [Number, String],
    default: 6,
  },
})

const { smAndDown } = useDisplay()

const config = reactive({
  colOrder: computed(() => {
    return !props.right || !smAndDown ? '12' : '-1'
  }),
  md: computed(() => {
    return 12 - props.col
  }),
})
</script>
