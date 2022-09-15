<template>
  <v-container class="">
    <v-card class="card-border mx-auto blue-lighten-1" width="800">
      <h1>Hello Word</h1>
    </v-card>

    <base-split>
      <HomeTitle />
      <HomeSubtitle />
    </base-split>
  </v-container>
</template>

<script setup>
import BaseSplit from "../components/BaseSplit.vue";
defineOptions({
  name: "YourComopnentName",
});
</script>
