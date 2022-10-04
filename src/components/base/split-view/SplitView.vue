<template>
  <v-row v-bind="rowPreset">
    <SplitLeftCol v-bind="$attrs">
      <slot />
    </SplitLeftCol>
    <SplitRightCol v-bind="$attrs">
      <SplitImage v-bind="$attrs" />
    </SplitRightCol>
  </v-row>
</template>
