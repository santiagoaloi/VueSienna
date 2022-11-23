<template>
  <VAppBar height="72" color="#22272e" elevation="14">
    <VContainer fluid class="d-flex align-center px-10">
      <SkriptagTitle />

      <VSpacer />

      <VTabs slider-color="primary" height="65" v-model="currentItem">
        <VTab
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
              <v-icon end> $mdiMenuDown </v-icon>
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
    </VContainer>
  </VAppBar>
</template>
<script setup>
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
