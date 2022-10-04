<template>
  <routerView></routerView>
</template>

<script setup>
const router = useRouter()
// onMounted(() => {
//   router.replace('/dashboard/overview')
// })
</script>
<route lang="yaml">
meta:
  layout: secure
  requiresAuth: true
</route>
