<template>
  <component
    @click="$router.push('/')"
    :is="size"
    style="color: #adbac7 !important; cursor: pointer"
    class="ignore-font"
  >
    <slot name="text" />
    <span :class="{ large: large }"
      >Skript<span class="skriptag-a">â</span>g</span
    >
  </component>
</template>

<script setup>
const props = defineProps({
  small: {
    type: Boolean,
    default: true,
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
  if (props.small) return 'h2'
})
</script>

<style scoped>
.large {
  font-size: 180% !important;
}

.skriptag-a {
  color: #aaaaaa;
  background-image: -webkit-linear-gradient(90deg, #adbac7 65%, #57bb9f 56%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
