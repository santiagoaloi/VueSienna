<template>
  <BaseBtn
    prepend-icon="$mdiAccount"
    :disabled="isCurrent"
    :loading="loading"
    @click="handler()"
    v-if="auth.userName"
  >
    Logout {{ auth.userName }}
  </BaseBtn>
</template>

<script setup>
let loading = $ref(false)
let auth = useAuthStore()

let handler = async () => {
  loading = true
  await auth.logout()
  loading = false
}
</script>
