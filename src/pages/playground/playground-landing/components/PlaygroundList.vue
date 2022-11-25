<template>
  <div
    :class="{ 'fill-height': filteredProjects.length }"
    class="d-flex flex-column mx-auto"
  >
    <v-card
      class="d-flex flex-column mx-auto rounded-lg my-10"
      width="70vw"
      elevation="14"
      style="backdrop-filter: saturate(50%) blur(8px)"
    >
      <!-- <v-card color="grey-lighten-4" flat height="200px" rounded="0">
        <v-toolbar extended>
          <PlaygroundTitle />
        </v-toolbar>
      </v-card> -->

      <v-toolbar color="#322F3F">
        <v-toolbar-title class="text-grey">
          Playground Projects
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn size="small" icon>
          <v-icon>$mdiFilterVariant</v-icon>
        </v-btn>
      </v-toolbar>

      <VTextField
        prepend-inner-icon="$mdiMagnify"
        placeholder="Search..."
        clearable
        autofocus
        bgColor="transparent"
        v-model="searchField"
      />

      <!-- <VDivider class="mx-7" /> -->
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
