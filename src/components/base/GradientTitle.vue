<template>
  <h2 class="main-title font-weight-black">
    <slot></slot>
  </h2>
</template>

<style>
.main-title {
  font-size: 70px;
  background: linear-gradient(to right, rgb(203, 211, 219), rgb(109, 118, 161));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.1;
  font-size: 70px;
}
</style>
