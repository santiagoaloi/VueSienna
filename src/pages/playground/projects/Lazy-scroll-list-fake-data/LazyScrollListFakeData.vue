<template>
  <div class="fill-height">
    <div
      :class="{ 'fill-height': mdAndUp }"
      color="transparent"
      class="d-flex flex-column bg-transparent"
    >
      <v-img
        class="fill-height"
        src="/hero.svg"
        style="overflow: visible"
        cover
      >
        <div
          :class="{ 'fill-height': items.length }"
          class="d-flex flex-column mx-auto"
        >
          <div class="text-h3 pa-15 align-center justify-center d-flex">
            <span>
              {{ visibleItems }} of {{ items.length }} {{ `posts shown` }}
            </span>
          </div>

          <v-card
            border
            class="d-flex flex-column mx-auto rounded-b-xl mb-10 fill-height"
            width="70vw"
            elevation="14"
            color="rgba(30, 30, 30, 0.5)"
            style="backdrop-filter: blur(9px)"
            min-height="200"
          >
            <VTextField
              prepend-inner-icon="$mdiMagnify"
              placeholder="Search..."
              clearable
              autofocus
              bgColor="transparent"
              class="search-field"
            />

            <v-list v-if="items.length" bg-color="transparent">
              <v-list-item :key="items.id" v-for="item in items">
                <v-lazy
                  v-model="item.isActive"
                  :options="{
                    threshold: 0.5,
                  }"
                  class="fill-height d-flex"
                >
                  <v-list-item>
                    <template v-slot:prepend="{ isActive }">
                      <v-list-item-action start>
                        <v-checkbox-btn></v-checkbox-btn>
                      </v-list-item-action>
                    </template>

                    <v-list-item-title>
                      <div class="text-capitalize" v-html="item.name"></div>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <div class="text-capitalize" v-html="item.company"></div>
                    </v-list-item-subtitle>
                  </v-list-item>
                </v-lazy>
              </v-list-item>
            </v-list>
          </v-card>
        </div>
      </v-img>
    </div>
  </div>
</template>

<script setup>
import { items } from '../scripts/lazy-scroll-data'
let { mdAndUp } = useDisplay()

let visibleItems = $computed(() => {
  return items.filter(project => project.isActive).length
})
</script>
<route lang="yaml">
meta:
  title: Lazy scroll (list - fake data)
  description: Tryout of lazy loading list items.
</route>
<style>
.search-field .v-field {
  border-radius: 0px;
}
</style>
