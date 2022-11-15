<template>
  <div>
    <v-img src="hero.svg" style="overflow: visible" height="750" cover>
      <div class="d-flex justify-center">
        <h1 class="text-h3 mt-10">Playgrounds</h1>
      </div>
    </v-img>

    <v-card
      border
      class="mx-auto mb-10 rounded-b-xl"
      min-height="250"
      width="70vw"
      style="margin-top: -600px"
      elevation="14"
      color="transparent"
    >
      <VTextField
        prepend-inner-icon="$mdiMagnify"
        placeholder="Search..."
        clearable
        autofocus
        class="search-field"
        bgColor="transparent"
        style="backdrop-filter: saturate(50%) blur(8px)"
      />

      <v-list
        bg-color="rgba(20, 20, 20, 0.9)"
        lines="two"
        :items="sortedProjects"
        item-props
      >
        <template v-slot:title="{ title }">
          <div class="text-capitalize" v-html="title"></div>
        </template>

        <template v-slot:subtitle="{ subtitle }">
          <div v-html="subtitle"></div>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
defineOptions({
  name: 'Playground',
})

const router = useRouter()
const allRoutes = router.getRoutes()

// List all routes in @/pages/playground/*
// exclude this SFC.
const routes = allRoutes.filter(
  r => r.name?.includes('playground') && r.name !== 'playground'
)

const regex = /(\w+)$/
const path = 'playground/projects/'

const projects = routes.flatMap(({ name, meta }) => [
  {
    prependIcon: '$mdiSpaceInvaders',
    title: name.match(regex)[1],
    get to() {
      return `${path + this.title}`
    },
    subtitle: meta.description
      ? `<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${meta.description}`
      : 'No description available',
  },
])

const sortedProjects = computed(() => {
  // Sortt titles alphabetically.
  return projects.sort(() => -1)
})
</script>
<style>
.search-field .v-field {
  border-radius: 0px;
}
</style>
