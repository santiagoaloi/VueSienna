<template>
  <div
    :class="{ 'fill-height': projects.length }"
    class="d-flex flex-column mx-auto"
  >
    <div class="text-h3 pa-15 align-center justify-center d-flex">
      playground projects
    </div>

    <v-card
      border
      class="d-flex flex-column mx-auto rounded-b-xl mb-10"
      width="70vw"
      elevation="14"
      color="rgba(30, 30, 30, 0.8)"
      style="backdrop-filter: blur(9px)"
    >
      <VTextField
        prepend-inner-icon="$mdiMagnify"
        placeholder="Search..."
        clearable
        autofocus
        bgColor="transparent"
        class="search-field"
      />

      <div class="d-flex justify-end mr-5 pa-2">
        <small>
          {{ visibleProjects }} of {{ projects.length }}
          {{ `projects loaded` }}
        </small>
      </div>

      <v-list bg-color="transparent" lines="two" v-if="projects.length">
        <v-list-item
          :to="project.to"
          v-for="project in projects"
          :key="project.title"
        >
          <template v-if="project.isActive" v-slot:prepend>
            <v-list-item-action start>
              <v-icon>{{ project.icon }}</v-icon>
            </v-list-item-action>
          </template>
          <v-lazy v-model="project.isActive" class="fill-height">
            <div v-if="project.isActive">
              <v-list-item-title>
                <div class="text-capitalize" v-html="project.title"></div>
              </v-list-item-title>
              <v-list-item-subtitle>
                <div class="text-capitalize" v-html="project.subtitle"></div>
              </v-list-item-subtitle>
            </div>
          </v-lazy>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script setup>
defineOptions({
  name: 'playgroundList',
})

let router = useRouter()
let allRoutes = router.getRoutes()

// List all routes in @/pages/playground/*
// exclude this SFC.
let routes = allRoutes.filter(
  r => r.name?.includes('playground') && r.name !== 'playground'
)

let visibleProjects = $computed(() => {
  return projects.filter(project => project.isActive).length
})

let projects = reactive(
  routes
    .flatMap(({ path, meta }) => {
      let regex = /(\w+)$/
      let fileName = path.match(regex)[1]

      return [
        {
          icon: meta.icon || '$mdiSpaceInvaders',

          to: `playground/${fileName.toLowerCase()}`,
          // Metadata custom name or extract SFC name.
          title: meta.title || fileName,
          subtitle: meta.description
            ? `<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${meta.description}`
            : 'No description available',
        },
      ]
    })
    //Sort titles alphabetically.
    .sort(() => -1)
)
</script>
