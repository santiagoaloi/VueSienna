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
          :class="{ 'fill-height': projects.length }"
          class="d-flex flex-column mx-auto"
        >
          <h5 class="text-h3 pa-15 align-center justify-center d-flex">
            <span>
              {{ visibleProjects }} of {{ projects.length }} {{ `posts shown` }}
            </span>
          </h5>

          <v-card
            border
            class="d-flex flex-column mx-auto rounded-b-xl mb-10 fill-height"
            width="70vw"
            elevation="14"
            color="rgba(30, 30, 30, 0.5)"
            style="backdrop-filter: saturate(50%) blur(8px)"
            min-height="200"
          >
            <VTextField
              class="d-flex flex-column"
              prepend-inner-icon="$mdiMagnify"
              placeholder="Search..."
              clearable
              autofocus
              bgColor="transparent"
            />

            <v-list v-if="projects.length" bg-color="transparent">
              <v-list-item :key="project.title" v-for="project in projects">
                <v-lazy
                  v-model="project.isActive"
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
                      <div class="text-capitalize" v-html="project.title"></div>
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      <div
                        class="text-capitalize"
                        v-html="project.subtitle"
                      ></div>
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
defineOptions({
  name: 'playgroundLazyScroll',
})

let router = useRouter()
let allRoutes = router.getRoutes()

let { mdAndUp } = useDisplay()

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
    .flatMap(({ name, meta }) => {
      let regex = /(\w+)$/
      let path = 'playground/projects/'
      let fileName = name.match(regex)[1]

      return [
        {
          prependIcon: '$mdiSpaceInvaders',
          // Metadata custom name or extract SFC name.
          title: meta.title || fileName,
          get to() {
            return `${path + fileName}`
          },
          subtitle: meta.description
            ? `<span class="text-deep-purple-accent-1">Ali Connors</span> &mdash; ${meta.description}`
            : 'No description available',
        },
      ]
    })
    // .filter(project => project.isActive)
    //Sort titles alphabetically.
    .sort(() => -1)
)
</script>
<route lang="yaml">
meta:
  title: Lazy scroll (list - playground files)
  description: Tryout of lazy loading cards.
  icon: $mdiFormatLineWeight
</route>
