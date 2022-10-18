<template>
  <VMenu :close-on-click="true" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn class="mt-n1" icon v-bind="props" size="x-small" variant="plain">
        <v-icon :icon="menu.icon" />
        <VTooltip openDelay="800" activator="parent">
          {{ menu.tooltip }}
        </VTooltip>
      </VBtn>
    </template>

    <VCard color="#323a44" flat class="mr-n3" min-width="300" max-height="300">
      <VCardTitle class="mb-n4"> {{ menu.title }} </VCardTitle>

      <VExpandTransition>
        <VCardSubtitle v-if="menu.subtitle.visible" class="text-teal-accent-2">
          {{ menu.subtitle.text }}
        </VCardSubtitle>
      </VExpandTransition>

      <div class="mb-3 mt-2">
        <VCheckbox
          v-for="header in menu.data.headers"
          class="ml-3"
          hide-details
          density="compact"
          v-model="header[menu.data.model]"
          :label="header.alias"
        />
      </div>
    </VCard>
  </VMenu>
</template>

<script setup>
defineOptions({
  name: 'BaseTableToolbarMenus',
})

const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
})
</script>
