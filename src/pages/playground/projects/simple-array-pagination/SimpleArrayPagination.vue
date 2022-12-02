<template>
  <VContainer class="d-flex fill-height align-center">
    <VCard
      title="Simple Pagination Concept"
      width="500"
      height="350"
      class="mx-auto d-flex flex-column"
    >
      <VList>
        <VListItem v-for="wizard in filteredWizards">
          {{ wizard.name }}
        </VListItem>
      </VList>

      <VCardActions>
        <span>Page {{ currentPage }} - {{ pages }} </span>
        <VSpacer></VSpacer>
        <span>Showing {{ currentPage }} out of {{ totalWizards }} </span>

        <VSpacer></VSpacer>
        <VBtn @click="previousPage()">Previous</VBtn>

        <VBtn @click="nextPage()">Next</VBtn>
      </VCardActions>
    </VCard>
  </VContainer>
</template>

<script setup>
function nextPage() {
  currentPage.value = Math.min(currentPage.value + 1, pages.value)
}

function previousPage() {
  currentPage.value = Math.max(currentPage.value - 1, 1)
}

let wizards = reactive([
  { id: 1, name: 'Harry', lastName: 'Potter' },
  { id: 2, name: 'Lord', lastName: 'Voldemort' },
  { id: 3, name: 'Ron', lastName: 'Weasley' },
  { id: 4, name: 'Gini', lastName: 'Weasley' },
  { id: 5, name: 'Septimus', lastName: 'Weasley' },
  { id: 6, name: 'William', lastName: 'Weasley' },
  { id: 7, name: 'Percy', lastName: 'Weasley' },
  { id: 8, name: 'George', lastName: 'Weasley' },
  { id: 9, name: 'James', lastName: 'Potter' },
  { id: 10, name: 'Lily', lastName: 'Potter' },
  { id: 11, name: 'Severus', lastName: 'Snape' },
  { id: 12, name: 'Draco', lastName: 'Malfoy' },
  { id: 13, name: 'Lucius', lastName: 'Malfoy' },
  { id: 14, name: 'Hermione', lastName: 'Granger' },
  { id: 15, name: 'Albus', lastName: 'Dumbledore' },
  { id: 16, name: 'Dean', lastName: 'Thomas' },
])

// Define results per page.
let resultsPerPage = ref(4)

// Starting page
let currentPage = ref(1)

// Calculate max pages
let pages = computed(() => Math.ceil(totalWizards.value / resultsPerPage.value))

// Total wizards
let totalWizards = computed(() => wizards.length)

let filteredWizards = computed(() => {
  const start = (currentPage.value - 1) * resultsPerPage.value
  return wizards.slice(start, start + resultsPerPage.value)
})
</script>
<route lang="yaml">
meta:
  title: Pagination - Array of objects
  description: Simple array pagination.
  icon: '$mdiFormDropdown'
</route>
