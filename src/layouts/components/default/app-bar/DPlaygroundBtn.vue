<template>
  <BaseBtn
    :disabled="isCurrent"
    @click="handler()"
    prepend-icon="$mdiSpaceInvaders"
    :loading="loading"
  >
    playground
  </BaseBtn>
</template>

<script setup>
import { useGoTo } from '@/@core/composables/routerGo'

let loading = $ref(false)

let { isCurrent, goTo } = useGoTo('playground')

let handler = async () => {
  loading = true
  await goTo()
  loading = false
}
</script>
