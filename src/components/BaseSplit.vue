<template>
  <v-row no-gutters class="fill-height">
    <v-col :order="colOrder" :md="remainingCols" cols="12">
      <v-img :src="src" height="100%" cover />
    </v-col>
    <v-col class="d-flex" :md="col" cols="12">
      <div class="pa-10 align-start justify-center d-flex flex-column">
        <slot></slot>
      </div>
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
    default: 5,
  },
})

const { smAndDown } = useDisplay()

const colOrder = computed(() => {
  return !props.right || !smAndDown ? '12' : '-1'
})

const remainingCols = computed(() => {
  return 12 - props.col
})
</script>
