<template>
  <div class="g-appbar-switch-wrapper">
    <VSwitch
      true-icon="$mdiMoonWaxingCrescent"
      false-icon="$mdiWhiteBalanceSunny"
      inset
      class="d-flex text-white"
      hide-details
      :ripple="false"
      color="#6B6975"
      true-value="dark"
      false-value="light"
      v-model="currentTheme"
    />
  </div>
</template>
<script setup>
import { useAppStore } from '@S/appStore'

// Theme logic
const { currentTheme } = toRefs(useAppStore())
</script>
