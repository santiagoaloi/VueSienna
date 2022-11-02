<template>
  <VContainer class="fill-height">
    <VRow class="fill-height align-center justify-center text-center">
      <VCol cols="6">
        <h1 class="pb-5">Choose a playground</h1>
        <VAutocomplete
          :menu-props="{ 'max-height': '200' }"
          autofocus
          :items="projects"
          v-model="selectedProject"
          :loading="loading"
          :disabled="loading"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: 'Playground',
})

const router = useRouter()
const loading = $ref(false)
const selectedProject = $ref('')

watch(
  () => selectedProject,
  newVal => {
    loading = true
    router.push(`/playground/projects/${newVal}`)
  }
)

const regex = /(\w+).vue$/
const run = await import.meta.glob('./projects/*.vue')
const components = Object.keys(run)
const projects = components.map(c => c.match(regex)[1])
</script>
