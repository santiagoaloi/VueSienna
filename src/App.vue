<template>
  <v-app>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <v-fade-transition appear mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </template>
    </router-view>
  </v-app>
</template>
