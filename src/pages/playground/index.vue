<template>
  <div>
    <v-img src="hero.svg" style="overflow: visible" height="750" cover>
      <div class="d-flex justify-center">
        <h1 class="text-h3 mt-10">Playgrounds</h1>
      </div>
    </v-img>

    <v-card
      border
      class="mx-auto mb-10"
      min-height="250"
      width="70vw"
      style="margin-top: -600px"
      elevation="14"
    >
      <v-list link lines="two" :items="projects" item-props>
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

const routes = allRoutes.filter(
  r => r.name?.includes('playground') && r.name !== 'playground'
)

const regex = /(\w+)$/

const projects = routes.flatMap(({ name, meta }) => [
  { type: 'divider', inset: true },
  {
    prependIcon: '$mdiSpaceInvaders',
    title: name.match(regex)[1],
    get to() {
      return `playground/projects/${this.title}`
    },
    subtitle: meta.description
      ? `<span class="text-cyan-accent-3">Ali Connors</span> &mdash; ${meta.description}`
      : 'No description available',
  },
])

projects[0].type = 'subheader'
projects[0].title = 'All playground projects'
</script>
