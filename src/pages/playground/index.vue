<template>
  <v-container class="ma-15">
    <v-autocomplete :items="projects" v-model="selectedProject" />
  </v-container>
</template>

<script setup>
defineOptions({
  name: 'Playground',
})

const router = useRouter()

const selectedProject = $ref('')

watchEffect(() => {
  if (selectedProject) router.push(`/playground/projects/${selectedProject}`)
})

const projects = reactive([])

onMounted(async () => {
  const regex = /(\w+).vue$/
  const run = await import.meta.glob('./projects/*.vue')
  const components = Object.keys(run)

  for (const component of components) {
    projects.push(component.match(regex)[1])
  }
})
</script>
