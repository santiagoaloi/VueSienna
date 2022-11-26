<template>
  <VMain scrollable>
    <router-view v-slot="{ Component }">
      <template v-if="Component">
        <VFadeTransition leave-absolute>
          <keep-alive>
            <suspense>
              <component :is="Component" />
            </suspense>
          </keep-alive>
        </VFadeTransition>
      </template>
    </router-view>
  </VMain>
</template>
