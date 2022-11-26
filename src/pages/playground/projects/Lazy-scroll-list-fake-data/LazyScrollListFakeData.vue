<template>
  <div class="fill-height">
    <div
      :class="{ 'fill-height': mdAndUp }"
      color="transparent"
      class="d-flex flex-column bg-transparent"
    >
      <VImg class="fill-height" src="hero.svg" style="overflow: visible" cover>
        <div
          :class="{ 'fill-height': items.length }"
          class="d-flex flex-column mx-auto"
        >
          <div class="text-h3 pa-15 align-center justify-center d-flex">
            <span>
              {{ visibleItems }} of {{ items.length }} {{ `posts shown` }}
            </span>
          </div>

          <VCard
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

            <VList v-if="items.length" bg-color="transparent">
              <VListItem :key="items.id" v-for="item in items">
                <VLazy
                  v-model="item.isActive"
                  :options="{
                    threshold: 0.5,
                  }"
                  class="fill-height d-flex"
                >
                  <VListItem>
                    <template v-slot:prepend="{ isActive }">
                      <VListItem-action start>
                        <VCheckboxBtn></VCheckboxBtn>
                      </VListItem-action>
                    </template>

                    <VListItemTitle>
                      <div class="text-capitalize" v-html="item.name"></div>
                    </VListItemTitle>
                    <VListItem-subtitle>
                      <div class="text-capitalize" v-html="item.company"></div>
                    </VListItem-subtitle>
                  </VListItem>
                </VLazy>
              </VListItem>
            </VList>
          </VCard>
        </div>
      </VImg>
    </div>
  </div>
</template>

<script setup>
import { items } from './scripts/lazy-scroll-data'
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
