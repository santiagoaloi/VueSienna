<template>
  <v-row v-bind="rowPreset">
    <v-col
      class="split-col-img"
      :order="colOrder"
      :md="remainingCols"
      cols="12"
    >
      <v-img :src="src" v-bind="imgPreset" />
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
import { imgPreset } from '@/components/presets/full-size-img'
import { rowPreset } from '@/components/presets/full-size-row'

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
