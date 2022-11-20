<template>
  <VContainer class="d-flex align-center fill-height">
    <v-card class="mx-auto" width="500 ">
      <v-container>
        <v-switch
          v-model="clearOnSelect"
          class="mb-n2"
          color="primary"
          label="Clear on select"
        />

        <div class="mb-4">
          <code>{{ cachedSelectedWizard }} </code>
        </div>

        <div>
          <code> Harry is {{ isHarryDisabled ? 'disabled' : 'enabled' }} </code>
          <v-btn
            @click="disabled = !disabled"
            class="ml-2"
            size="small"
            :color="disabled ? 'primary' : 'grey'"
          >
            {{ isHarryDisabled ? 'enable' : 'disable' }}
          </v-btn>
        </div>

        <VAutocomplete
          autofocus
          :items="wizards"
          class="mt-4"
          v-model="selectedWizard"
          return-object
          item-props="itemProps"
          ref="inputRef"
          @update:model-value="onAutocompleteSelect"
          item-title="name"
        >
        </VAutocomplete>
      </v-container>
    </v-card>
  </VContainer>
</template>

<script setup>
let wizards = reactive([
  { id: 1, name: 'Harry', lastName: 'Potter', itemProps: { disabled: true } },
  { id: 2, name: 'Ron', lastName: 'Weasley', itemProps: { disabled: false } },
  { id: 3, name: 'Ginny', lastName: 'Weasley', itemProps: { disabled: false } },

  {
    id: 4,
    name: 'Lord',
    lastName: 'Voldemort',
    itemProps: { disabled: false },
  },
  {
    id: 5,
    name: 'Severus',
    lastName: 'Snape',
    itemProps: { disabled: false },
  },
  {
    id: 6,
    name: 'Albus',
    lastName: 'Dumbledore',
    itemProps: { disabled: false },
  },
])

let inputRef = $ref(null)
let clearOnSelect = $ref(true)
let selectedWizard = $ref(null)
let cachedSelectedWizard = $ref(null)

async function onAutocompleteSelect(e) {
  if (!clearOnSelect) return
  await nextTick()
  selectedWizard = []
  inputRef.search = null
  cachedSelectedWizard = e
}

let isHarryDisabled = $computed(() => {
  return wizards[0].itemProps.disabled
})

let { disabled } = toRefs(wizards[0].itemProps)
</script>

<route lang="yaml">
meta:
  title: Autocomplete - Clear on Select
  description: Autocomplete demo on how to disable list items and clear field after item selection.
  icon: '$mdiFormDropdown'
</route>
