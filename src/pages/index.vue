<template>
  <base-split col="5" src="bg1.svg">
    <HomeTitle />
    <HomeSubtitle />
    {{ import.meta.env }}
  </base-split>
</template>

<script setup>
defineOptions({
  name: 'Home',
})

console.log(import.meta.env)
</script>
