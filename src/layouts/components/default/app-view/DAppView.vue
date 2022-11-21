<template>
  <VMain scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition leave-absolute>
          <KeepAlive>
            <Suspense>
              <component :is="Component"></component>
            </Suspense>
          </KeepAlive>
        </VFadeTransition>
      </template>
    </RouterView>
  </VMain>
</template>
