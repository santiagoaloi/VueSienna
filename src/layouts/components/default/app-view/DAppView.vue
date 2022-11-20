<template>
  <v-main scrollable>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <v-fade-transition mode="out-in">
          <component :is="Component"></component>
        </v-fade-transition>
      </template>
    </router-view>
  </v-main>
</template>
