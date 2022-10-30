<template>
  <VContainer class="d-flex align-center fill-height">
    <v-card class="bg-transparent mx-auto" width="500 ">
      <code> Harry is {{ isHarryDisabled ? "disabled" : "enabled" }} </code>
      <v-btn class="ml-2" size="small" color="teal">
        {{ isHarryDisabled ? "enable" : "disable" }}
      </v-btn>
      <VAutocomplete
        item-title="name"
        :items="wizards"
        class="mt-4"
        v-model="selectedWizzard"
        return-object
      >
      </VAutocomplete>
    </v-card>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: "PlaygroundAutocomplete",
})

const selectedWizzard = $ref(null)

const isHarryDisabled = $computed(() => {
  return wizards[0].isDisabled
})

const wizards = reactive([
  { id: 1, name: "Harry", lastName: "Potter", isDisabled: true },
  { id: 2, name: "Ron", lastName: "Weasley", isDisabled: false },
  { id: 3, name: "Ginny", lastName: "Weasley", isDisabled: false },
])
</script>
  