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

const loading = $ref(false)

const { isCurrent, goTo } = useGoTo('playground')

const handler = async () => {
  loading = true
  await goTo()
  loading = false
}
</script>
