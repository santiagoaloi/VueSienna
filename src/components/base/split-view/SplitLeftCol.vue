<template>
  <v-col :md="mdAndDown ? 12 : col" cols="12">
    <v-container fluid class="px-11">
      <slot />
    </v-container>
  </v-col>
</template>

<script setup>
defineProps({
  col: {
    type: [Number, String],
    default: 6,
  },
})

const { mdAndDown } = useDisplay()
</script>
