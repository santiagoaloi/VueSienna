<template>
  <VContainer class="py-3">
    <div class="display-2">Endless scrolling with VLazy</div>
    <h5>
      <span v-text="visibleProjects"></span> of
      <span>{{ projects.length }}</span> posts shown
    </h5>
    <VRow class="fill-height overflow-y-auto" v-if="projects.length">
      <VCol lg="3" md="4" sm="6" cols="12" v-for="(project, index) in projects">
        <VSheet min-height="300" class="fill-height" color="red">
          <VLazy
            v-model="project.isActive"
            :options="{
              threshold: 0.8,
            }"
            class="fill-height"
          >
            <VCard color="rgba(20, 20, 20, 0.8)" class="fill-height" hover>
              <VCardText>
                <VRow :key="index" @click="">
                  <VCol sm="10" cols="12" class="text-sm-left text-center">
                    #{{ index + 1 }}
                    <h2 v-html="project.title"></h2>
                    <div v-html="project.subtitle"></div>
                  </VCol>
                </VRow>
              </VCardText>
            </VCard>
          </VLazy>
        </VSheet>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: 'playgroundLazyScroll',
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
    //Sort titles alphabetically.
    .sort(() => -1)
)
</script>
<route lang="yaml">
meta:
  title: Lazy scroll (cards - playground files)
  description: Tryout of lazy loading cards.
  icon: $mdiCardOutline
</route>
