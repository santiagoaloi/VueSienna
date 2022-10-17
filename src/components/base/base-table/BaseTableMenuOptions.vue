<template>
  <VMenu :close-on-click="true" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <VBtn class="mt-n1" icon v-bind="props" size="x-small" variant="plain">
        <v-icon :icon="option.icon" />
        <VTooltip openDelay="800" activator="parent">
          {{ option.tooltip }}
        </VTooltip>
      </VBtn>
    </template>

    <VCard color="#323a44" flat class="mr-n3" min-width="300" max-height="300">
      <VCardTitle class="mb-n4"> {{ option.title }} </VCardTitle>

      <VExpandTransition>
        <VCardSubtitle
          v-if="option.subtitle.visible"
          class="text-teal-accent-2"
        >
          {{ option.subtitle.text }}
        </VCardSubtitle>
      </VExpandTransition>

      <div class="mb-3 mt-2">
        <VCheckbox
          v-for="header in option.data.array"
          class="ml-3"
          hide-details
          density="compact"
          v-model="header[option.data.model]"
          :label="header.alias"
        />
      </div>
    </VCard>
  </VMenu>
</template>

<script setup>
defineOptions({
  name: 'BaseTableMenuOptions',
})

const props = defineProps({
  option: {
    type: Array,
    default: () => [],
  },
})
</script>
