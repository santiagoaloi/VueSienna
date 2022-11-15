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

      <v-list bg-color="rgba(20, 20, 20, 0.9)" lines="two" item-props>
        <v-lazy
          :options="{
            threshold: 0.5,
          }"
          min-height="300"
          transition="fade-transition"
        >
          <v-list-item :key="item.title" v-for="item in projects">
            <v-list-item-title>
              <div class="text-capitalize" v-html="item.title"></div>
            </v-list-item-title>
            <v-list-item-subtitle>
              <div class="text-capitalize" v-html="item.subtitle"></div>
            </v-list-item-subtitle>
          </v-list-item>
        </v-lazy>
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

const projects = routes
  .flatMap(({ name, meta }) => {
    const regex = /(\w+)$/
    const path = 'playground/projects/'
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
</script>
<style>
.search-field .v-field {
  border-radius: 0px;
}
</style>
