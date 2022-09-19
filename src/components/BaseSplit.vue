<template>
  <v-row class="fill-height" align="center" no-gutters>
    <v-col
      class="d-lg-flex d-none fill-height"
      :order="colOrder"
      :md="remainingCols"
      cols="12"
    >
      <v-img eager :transition="false" :src="src" height="100%" cover />
    </v-col>
    <v-col :md="mdAndDown ? 12 : col" cols="12">
      <v-container fluid class="px-15">
        <slot />
      </v-container>
    </v-col>
  </v-row>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },

  right: {
    type: Boolean,
    default: false,
  },

  col: {
    type: [Number, String],
    default: 6,
  },
})

const { smAndDown, mdAndDown } = useDisplay()

const colOrder = computed(() => {
  return !props.right || !smAndDown ? '12' : '-1'
})

const remainingCols = computed(() => {
  return 12 - props.col
})
</script>
