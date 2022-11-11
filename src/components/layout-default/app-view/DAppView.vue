<template>
  <VMain scrollable>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition mode="out-in">
          <component :is="Component"></component>
        </VFadeTransition>
      </template>
    </RouterView>
  </VMain>
</template>
