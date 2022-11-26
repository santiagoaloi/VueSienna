<template>
  <div
    :class="{ 'fill-height': filteredProjects.length }"
    class="d-flex flex-column mx-auto"
  >
    <VCard
      class="d-flex flex-column mx-auto rounded-lg my-10"
      width="70vw"
      elevation="14"
      style="backdrop-filter: saturate(50%) blur(8px)"
    >
      <VToolbar color="#322F3F">
        <VToolbarTitle class="text-grey"> Playground Projects </VToolbarTitle>

        <VSpacer />

        <VBtn size="small" icon>
          <VIcon>$mdiFilterVariant</VIcon>
        </VBtn>
      </VToolbar>

      <VTextField
        prepend-inner-icon="$mdiMagnify"
        placeholder="Search..."
        clearable
        autofocus
        bgColor="transparent"
        v-model="searchField"
      />

      <div class="d-flex justify-end mr-5 pa-2">
        <small>
          {{ filteredProjects.length }}
          {{ `projects found.` }}
        </small>
      </div>

      <VList bg-color="transparent" lines="two">
        <VListItem
          :to="project.to"
          v-for="project in filteredProjects"
          :key="project.title"
        >
          <template v-slot:prepend>
            <VListItem-action start>
              <VIcon>{{ project.icon }}</VIcon>
            </VListItem-action>
          </template>
          <div>
            <VListItemTitle>
              <div class="text-capitalize" v-html="project.title"></div>
            </VListItemTitle>
            <VListItem-subtitle>
              <div class="text-capitalize" v-html="project.subtitle"></div>
            </VListItem-subtitle>
          </div>
        </VListItem>
      </VList>
    </VCard>
  </div>
</template>

<script setup>
import { usePlaygroundStore } from '../stores/playgroundStore'

defineOptions({
  name: 'playgroundList',
})

let playground = usePlaygroundStore()

const { searchField, filteredProjects } = toRefs(playground)
</script>
