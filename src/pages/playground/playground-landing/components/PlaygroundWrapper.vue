<template>
  <div
    :class="{ 'fill-height': mdAndUp }"
    color="transparent"
    class="d-flex flex-column"
  >
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  name: 'playgroundWrapper',
})

const { mdAndUp } = useDisplay()
</script>
