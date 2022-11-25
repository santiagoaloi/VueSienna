<template>
  <h2 class="main-title font-weight-black">
    <slot />
  </h2>
</template>

<style>
.main-title {
  color: #adbac7;
  background-image: -webkit-linear-gradient(
    225deg,
    rgba(var(--v-app-gradient-title-from)) 0%,
    rgba(var(--v-app-gradient-title-to)) 73%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
  font-size: 75px;
}
</style>
