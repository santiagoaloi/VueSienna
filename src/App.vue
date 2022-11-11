<template>
  <VApp full-height>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition appear mode="out-in">
          <component :is="Component" />
        </VFadeTransition>
      </template>
    </RouterView>
  </VApp>
</template>
