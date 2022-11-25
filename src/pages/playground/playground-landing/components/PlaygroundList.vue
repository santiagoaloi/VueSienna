<template>
  <div
    :class="{ 'fill-height': filteredProjects.length }"
    class="d-flex flex-column mx-auto"
  >
    <PlaygroundTitle />

    <v-card
      border
      class="d-flex flex-column mx-auto rounded-b-xl mb-10"
      width="70vw"
      elevation="14"
      color="rgba(30, 30, 30, 0.7)"
      style="backdrop-filter: blur(2px)"
    >
      <VTextField
        prepend-inner-icon="$mdiMagnify"
        placeholder="Search..."
        clearable
        autofocus
        bgColor="transparent"
        class="search-field"
        v-model="searchField"
      />

      <div class="d-flex justify-end mr-5 pa-2">
        <small>
          {{ filteredProjects.length }}
          {{ `projects found.` }}
        </small>
      </div>

      <v-list bg-color="transparent" lines="two">
        <v-list-item
          :to="project.to"
          v-for="project in filteredProjects"
          :key="project.title"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-icon>{{ project.icon }}</v-icon>
            </v-list-item-action>
          </template>
          <div>
            <v-list-item-title>
              <div class="text-capitalize" v-html="project.title"></div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="text-capitalize" v-html="project.subtitle"></div>
            </v-list-item-subtitle>
          </div>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
import { usePlaygroundStore } from '../stores/playgroundStore'

defineOptions({
  name: 'playgroundList',
})

let playground = usePlaygroundStore()

// Getters
const { searchField, filteredProjects } = toRefs(playground)
</script>
