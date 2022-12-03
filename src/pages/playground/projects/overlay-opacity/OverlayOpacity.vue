<template>
  <div class="text-center fill-height d-flex align-center justify-center">
    <v-btn color="error" @click="overlay = !overlay"> Show Overlay </v-btn>

    <v-overlay v-model="overlay"></v-overlay>
  </div>
</template>

<script>
getGridElementsForDisplay: (_, getters, rootState) => {
  let thisDisplay = rootState.DisplayStore.thisDisplay

  return thisDisplay
    ? getters.getEnabledGridElements.filter(e =>
        e.displays.includes(thisDisplay._id)
      )
    : []
}

export default {
  data: () => ({
    overlay: false,
    opacity: '50%',
  }),
}
</script>

<style>
.v-overlay > .v-overlay__scrim {
  opacity: v-bind(opacity);
}
</style>

<route lang="yaml">
meta:
  title: Overlay - Opacity
  description: Playing  with opacity
  icon:
</route>
