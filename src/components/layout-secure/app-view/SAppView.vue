<template>
  <VMain scrollable>
    <RouterView />
  </VMain>

  <v-tooltip>
    <template #activator="{ props }">
      <v-btn v-bind="props" color="info" icon="mdi-percent" />
    </template>
    <span>Foo</span>
  </v-tooltip>
  //Icon is gone
  <v-btn color="info" icon="mdi-percent">
    <v-tooltip activator="parent" location="top">
      <span>Bar</span>
    </v-tooltip>
  </v-btn>
</template>
