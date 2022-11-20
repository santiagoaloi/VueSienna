<template>
  <v-app-bar height="72" color="#22272e" elevation="14">
    <v-container fluid class="d-flex align-center px-10">
      <skriptag-title />

      <v-spacer />

      <v-tabs height="65" v-model="currentItem">
        <v-tab
          v-for="item in items"
          :key="item.name"
          :value="'tab-' + item.name"
          :to="item.to"
        >
          {{ item.name }}
        </v-tab>

        <v-menu v-if="more.length">
          <template v-slot:activator="{ props }">
            <v-btn
              variant="plain"
              rounded="0"
              class="align-self-center mr-4"
              height="100%"
              v-bind="props"
            >
              more
              <v-icon end> $mdiMenuDown </v-icon>
            </v-btn>
          </template>

          <v-list class="bg-grey-lighten-3">
            <v-list-item
              v-for="item in more"
              :key="item"
              @click="addItem(item)"
              :to="item.to"
            >
              {{ item.name }}
            </v-list-item>
          </v-list>
        </v-menu>
      </v-tabs>
    </v-container>
  </v-app-bar>
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
