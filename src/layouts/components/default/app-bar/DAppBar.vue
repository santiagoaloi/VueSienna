<template>
  <VAppBar height="72" color="#22272e" elevation="14">
    <VContainer fluid class="d-flex align-center px-10">
      <SkriptagTitle />

      <VSpacer />

      <VTabs height="65" v-model="currentItem">
        <VTab
          v-for="item in items"
          :key="item.name"
          :value="'tab-' + item.name"
          :to="item.to"
        >
          {{ item.name }}
        </VTab>

        <VMenu v-if="more.length">
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
              v-for="item in more"
              :key="item"
              @click="addItem(item)"
              :to="item.to"
            >
              {{ item.name }}
            </VListItem>
          </VList>
        </VMenu>
      </VTabs>
    </VContainer>
  </VAppBar>
</template>
<script>
export default {
  data: () => ({
    currentItem: 'tab-Web',
    items: [
      { name: 'Skriptag', to: '/' },

      { name: 'playground', to: '/playground' },
      { name: 'Login', to: '/Login' },
    ],
    more: [{ name: 'Console', to: '' }],
  }),

  methods: {
    addItem(item) {
      let removed = this.items.splice(0, 1)

      this.items.push(...this.more.splice(this.more.indexOf(item), 1))
      this.more.push(...removed)

      this.$nextTick(() => {
        this.currentItem = 'tab-' + item.name
      })
    },
  },
}
</script>
