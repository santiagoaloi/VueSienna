<template>
  <VMenu :close-on-click="true" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn class="mt-n1" icon v-bind="props" size="x-small" variant="plain">
        <VIcon :icon="icon" />
        <VTooltip openDelay="800" activator="parent">
          {{ tooltip }}
        </VTooltip>
      </VBtn>
    </template>

    <VCard flat class="mr-n3" min-width="300" max-height="300">
      <VCardTitle v-text="title" class="mb-n4" />

      <VExpandTransition>
        <VCardSubtitle
          v-text="subtitle.text"
          v-if="subtitle.isVisible"
          class="text-teal-accent-2"
        />
      </VExpandTransition>

      <div class="mb-3 mt-2">
        <VCheckbox
          v-for="item in data.array"
          class="ml-3"
          hide-details
          density="compact"
          v-model="item[data.model]"
          :label="item.alias"
        />
      </div>
    </VCard>
  </VMenu>
</template>

<script setup>
defineOptions({
  name: 'BaseTableToolbarMenus',
})

let props = defineProps({
  menu: {
    type: [Array, Object],
    default: () => [] || {},
  },
})

let { title, icon, tooltip, data, subtitle } = toRefs(props.menu)
</script>
