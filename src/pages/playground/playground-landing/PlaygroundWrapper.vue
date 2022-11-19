<template>
  <div class="fill-height">
    <div
      :class="{ 'fill-height': mdAndUp }"
      color="transparent"
      class="d-flex flex-column bg-transparent"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'playgroundWrapper',
})
</script>
