<template>
  <v-container>
    <v-card class="card-border mx-auto blue-lighten-1" width="800">
      <h1>Hello Word</h1>
    </v-card>
  </v-container>
</template>

<script setup>
defineOptions({
  name: 'YourComopnentName',
})

const mySwitch = true

if (mySwitch) {
  console.log('yes, switch is true')
}
</script>
