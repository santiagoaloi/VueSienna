<template>
  <VMain scrollable>
    <VAppBar class="bottom-border" color="transparent" height="72">
      <SProfileDetails />

      <VList bg-color="transparent">
        <VListItem title="Account Balance" subtitle="$ 0" />
      </VList>
    </VAppBar>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </VMain>
</template>
