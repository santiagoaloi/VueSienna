<template>
  <VMain scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition mode="out-in">
          <Suspense>
            <component :is="Component"></component>
          </Suspense>
        </VFadeTransition>
      </template>
    </RouterView>
  </VMain>
</template>
