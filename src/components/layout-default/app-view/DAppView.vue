<template>
  <VMain scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition mode="out-in">
          <!-- <KeepAlive> -->
          <Suspense>
            <component :is="Component"></component>
            <!-- <template #fallback> Loading... </template> -->
          </Suspense>
          <!-- </KeepAlive> -->
        </VFadeTransition>
      </template>
    </RouterView>
  </VMain>
</template>
