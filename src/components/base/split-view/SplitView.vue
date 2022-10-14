<template>
  <VRow v-bind="rowPreset">
    <SplitLeftCol v-bind="$attrs">
      <slot />
    </SplitLeftCol>
    <SplitRightCol v-bind="$attrs">
      <SplitImage v-bind="$attrs">
        <slot name="image-content" />
      </SplitImage>
    </SplitRightCol>
  </VRow>
</template>
