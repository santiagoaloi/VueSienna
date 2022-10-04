<template>
  <v-main scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <v-fade-transition mode="out-in">
          <KeepAlive>
            <Suspense>
              <component :is="Component"></component>
              <template #fallback> Loading... </template>
            </Suspense>
          </KeepAlive>
        </v-fade-transition>
      </template>
    </RouterView>
  </v-main>
</template>
