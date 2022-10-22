<template>
  <VApp>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition appear mode="out-in">
          <component :is="Component"></component>
        </VFadeTransition>
      </template>
    </RouterView>
  </VApp>
</template>
