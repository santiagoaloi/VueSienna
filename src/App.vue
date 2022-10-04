<template>
  <v-app v-once>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <component :is="Component"></component>
      </template>
    </RouterView>
  </v-app>
</template>
