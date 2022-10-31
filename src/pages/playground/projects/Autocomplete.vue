<template>
  <VContainer class="d-flex align-center fill-height">
    <v-card class="bg-transparent mx-auto" width="500 ">
      <code> Harry is {{ isHarryDisabled ? "disabled" : "enabled" }} </code>
      <v-btn
        @click="disabled = !disabled"
        class="ml-2"
        size="small"
        :color="disabled ? 'teal' : 'grey'"
      >
        {{ isHarryDisabled ? "enable" : "disable" }}
      </v-btn>
      <VAutocomplete
        item-title="name"
        :items="wizards"
        class="mt-4"
        v-model="selectedWizzard"
        return-object
        item-props="itemProps"
      >
      </VAutocomplete>
    </v-card>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: "PlaygroundAutocomplete",
})

let wizards = reactive([
  { id: 1, name: "Harry", lastName: "Potter", itemProps: { disabled: true } },
  { id: 2, name: "Ron", lastName: "Weasley", itemProps: { disabled: false } },
  { id: 3, name: "Ginny", lastName: "Weasley", itemProps: { disabled: false } },
])

let selectedWizzard = $ref(null)

let isHarryDisabled = $computed(() => {
  return wizards[0].itemProps.disabled
})

const { disabled } = toRefs(wizards[0].itemProps)
</script>
  