<template>
  <HomeLanding>
    <v-chip
      icon="$mdiGithub"
      class="mb-2"
      color="indigo-accent-1"
      text-color="white"
      border
    >
      <v-icon start icon="$mdiGithub" />
      v1.0.1
    </v-chip>
    <SkriptagTitle large class="mb-2" />
    <GradientTitle> Make the best app you've ever made.</GradientTitle>
    <HomeSubtitle>
      Get consultancy , learn coding, download free and premium application
      templates, access JS/VueJS training material and participate in blogs.
    </HomeSubtitle>
  </HomeLanding>
</template>

<script setup>
defineOptions({
  name: 'Home',
})
</script>
