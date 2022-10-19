<template>
  <VContainer class="fill-height">
    <VRow class="fill-height align-center justify-center text-center">
      <VCol cols="6">
        <h1 class="pb-5">Choose a playground below</h1>
        <VSelect :items="projects" v-model="selectedProject" />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: 'Playground',
})

const router = useRouter()

const selectedProject = $ref('')

watch(
  () => selectedProject,
  newVal => {
    router.push(`/playground/projects/${newVal}`)
  }
)

const regex = /(\w+).vue$/
const run = await import.meta.glob('./projects/*.vue')
const components = Object.keys(run)
const projects = components.map(c => c.match(regex)[1])
</script>
