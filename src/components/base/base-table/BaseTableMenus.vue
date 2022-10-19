<template>
  <VMenu :close-on-click="true" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn class="mt-n1" icon v-bind="props" size="x-small" variant="plain">
        <v-icon :icon="icon" />
        <VTooltip openDelay="800" activator="parent">
          {{ tooltip }}
        </VTooltip>
      </VBtn>
    </template>

    <VCard color="#323a44" flat class="mr-n3" min-width="300" max-height="300">
      <VCardTitle class="mb-n4"> {{ title }} </VCardTitle>

      <VExpandTransition>
        <VCardSubtitle v-if="subtitle.isVisible" class="text-teal-accent-2">
          {{ subtitle.text }}
        </VCardSubtitle>
      </VExpandTransition>

      <div class="mb-3 mt-2">
        <VCheckbox
          v-for="header in data.headers"
          class="ml-3"
          hide-details
          density="compact"
          v-model="header[data.model]"
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

const { title, icon, tooltip, data, subtitle } = toRefs(props.menu)
</script>
