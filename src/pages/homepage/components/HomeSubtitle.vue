<template>
  <h2 style="color: #adbac7" v-bind="{ ...settings }">
    <slot />
  </h2>
</template>

<script setup>
import { settings } from './scripts/properties-subtitle'
</script>
