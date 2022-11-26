<template>
  <SplitView col="6" src="x2.svg">
    <slot />
    <template #image-content>
      <div class="d-flex align-center fill-height justify-center">
        <img style="width: 50vw" src="/bgCode.png" />
      </div>
    </template>
  </SplitView>
</template>
