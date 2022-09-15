<template>
  <v-app>
    <DefaultAppBar />
    <v-main>
      <v-container fluid class="fill-height pa-0 ma-0">
        <router-view v-slot="{ Component }">
          <v-fade-transition mode="out-in">
            <component :is="Component" />
          </v-fade-transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
