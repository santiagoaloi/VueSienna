<template>
  <component
    @click="$router.push('/')"
    :is="size"
    :class="{
      'text-white': !large && appbar,
      'skriptag-logo-link': link,
      'skriptag-glow': glow,
    }"
  >
    <slot name="text" />
    <span :class="{ large: large }"
      >Skript<span
        :class="{ 'skriptag-a': !appbar, 'skriptag-a-appbar': appbar }"
        >â</span
      >g</span
    >
  </component>
</template>

<script setup>
let props = defineProps({
  small: {
    type: Boolean,
    default: true,
  },
  large: {
    type: Boolean,
    default: false,
  },
  appbar: {
    type: Boolean,
    default: false,
  },
  glow: {
    type: Boolean,
    default: false,
  },
  link: {
    type: Boolean,
    default: false,
  },
})

let size = computed(() => {
  if (props.small) return 'h2'
})
</script>

<style scoped>
.large {
  font-size: 280% !important;
}

.skriptag-title {
  color: rgba(var(--v-app-skriptag-title));
}

.skriptag-glow {
  filter: drop-shadow(0 0.1rem 1.8em #9397cfaa);
}

.skriptag-logo-link {
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.25s;
}

.skriptag-logo-link:hover {
  opacity: 0.8;
  transition: opacity 0.25s;
}

.skriptag-a {
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(var(--v-app-typography)) 65%,
    #57bb9f 56%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skriptag-a-appbar {
  background-image: -webkit-linear-gradient(
    90deg,
    rgba(255, 255, 255) 65%,
    #57bb9f 56%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
