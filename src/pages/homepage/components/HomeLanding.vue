<template>
  <SplitView col="6" src="x2.svg">
    <slot />
    <template #image-content>
      <div class="home-landing-img-wrap">
        <img style="width: 50vw" src="/bgCode.png" />
      </div>
    </template>
  </SplitView>
</template>
