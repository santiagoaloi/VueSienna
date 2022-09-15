<template>
  <v-container class="">
    <v-card class="card-border mx-auto blue-lighten-1" width="800">
      <h1>Hello Word</h1>
      <v-btn @click="goToLogin" color="#0FA933">Login</v-btn>
    </v-card>

    <base-split>
      <HomeTitle />
      <HomeSubtitle />
    </base-split>
  </v-container>
</template>

<script setup>
defineOptions({
  name: "YourComopnentName",
});

const router = useRouter();
function goToLogin() {
  router.push("/public/login");
}
</script>
