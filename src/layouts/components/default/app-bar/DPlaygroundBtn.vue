<template>
  <BaseBtn
    :disabled="isCurrent"
    @click="handler()"
    prepend-icon="$mdiSpaceInvaders"
    :loading="loading"
  >
    Playground
  </BaseBtn>
</template>

<script setup>
import { useGoTo } from '@C/routerGo'

let loading = $ref(false)

let { isCurrent, goTo } = useGoTo('playground')

let handler = async () => {
  loading = true
  await goTo()
  loading = false
}
</script>
