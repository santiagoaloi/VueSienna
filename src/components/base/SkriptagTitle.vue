<template>
  <div class="d-inline-block ml-10">
    <component
      @click="$router.push('/')"
      :is="size"
      style="color: #adbac7 !important; cursor: pointer"
      class="ignore-font"
    >
      <slot name="text" /> Skriptag
      <span
        :class="small ? 'ml-n8' : large ? 'ml-n16' : 'ml-n10'"
        class="logo-icon-color"
        >ˆ
      </span>
      <span class="ml-6"> banking</span>
    </component>
  </div>
</template>

<script setup>
const props = defineProps({
  small: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
})

const size = computed(() => {
  return props.small ? 'h2' : 'h1'
})
</script>

<style scoped>
.large {
  font-size: 300% !important;
}
</style>
