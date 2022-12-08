<template>
  <v-snackbar
    :color="app.globalSnackbar.color"
    v-model="app.globalSnackbar.model"
    location="bottom right"
    class="mx-7 mt-n2"
  >
    {{ app.globalSnackbar.text }}

    <template v-slot:actions>
      <v-btn @click="app.globalSnackbar.model = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup>
const app = useAppStore()
</script>
