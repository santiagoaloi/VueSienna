<template>
  <v-main scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <v-fade-transition leave-absolute>
          <KeepAlive>
            <Suspense>
              <!-- main content -->
              <component :is="Component"></component>

              <!-- loading state -->
              <template #fallback> Loading... </template>
            </Suspense>
          </KeepAlive>
        </v-fade-transition>
      </template>
    </RouterView>
  </v-main>
</template>
