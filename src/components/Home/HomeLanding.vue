<template>
  <SplitView col="5" src="/x2.svg">
    <slot />

    <template #image-content>
      <div class="d-flex align-center" style="z-index: 2">
        <img style="width: 50vw; margin-left: 10vw" src="/bgCode.png" />
      </div>
    </template>
  </SplitView>
</template>
