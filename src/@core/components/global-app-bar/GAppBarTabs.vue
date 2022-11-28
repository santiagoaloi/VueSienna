<template>
  <VTabs
    height="65"
    :disabled="isRouting"
    slider-color="primary"
    v-model="currentItem"
  >
    <VTab
      :ripple="false"
      v-for="tab in tabs"
      :key="tab.name"
      :value="'tab-' + tab.name"
      :to="tab.to"
    >
      {{ tab.name }}
    </VTab>

    <VMenu v-if="tabMenu.length">
      <template v-slot:activator="{ props }">
        <VBtn
          variant="plain"
          rounded="0"
          class="align-self-center mr-4"
          height="100%"
          v-bind="props"
        >
          more
          <VIcon end> $mdiMenuDown </VIcon>
        </VBtn>
      </template>

      <VList class="bg-grey-lighten-3">
        <VListItem
          v-for="menuItem in tabMenu"
          :key="menuItem"
          @click="addItem(menuItem)"
          :to="menuItem.to"
        >
          {{ menuItem.name }}
        </VListItem>
      </VList>
    </VMenu>
  </VTabs>
</template>
<script setup>
import { useAppStore } from '@S/appStore'

// Theme logic
const { isRouting } = toRefs(useAppStore())

// Navigation-Bar Logic

let currentItem = $ref('tab-Skriptag')

let tabs = reactive([
  { name: 'Skriptag', to: '/', disabled: true },

  { name: 'playground', to: '/playground', disabled: false },
  { name: 'Login', to: '/Login', disabled: false },
])

let tabMenu = reactive([{ name: 'Console', to: '' }])

function addItem(item) {
  let removed = tabs.splice(0, 1)
  tabs.push(...tabMenu.splice(tabMenu.indexOf(item), 1))
  tabMenu.push(...removed)

  nextTick(() => {
    currentItem = 'tab-' + item.name
  })
}
</script>
