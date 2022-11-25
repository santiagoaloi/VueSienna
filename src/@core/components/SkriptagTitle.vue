<template>
  <component
    @click="$router.push('/')"
    :is="size"
    :class="{
      'skriptag-logo-hover': large,
      'text-white': !large,
      'skriptag-logo': !large,
    }"
  >
    <slot name="text" />
    <span :class="{ large: large }"
      >Skript<span :class="{ 'skriptag-a': large, 'skriptag-a-appbar': !large }"
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
  link: {
    type: Boolean,
    default: false,
  },
})

const titleColor = computed(() => {
  return 'rgba(var(--v-app-skriptag-title))'
})

let size = computed(() => {
  if (props.small) return 'h2'
})
</script>

<style scoped>
.large {
  font-size: 350% !important;
}

.skriptag-title {
  color: rgba(var(--v-app-skriptag-title));
}

.skriptag-logo-hover {
  filter: drop-shadow(0 0.1rem 1.8em #9397cfaa);
}

.skriptag-logo {
  opacity: 1;
  transition: opacity 0.25s;
}

.skriptag-logo:hover {
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
