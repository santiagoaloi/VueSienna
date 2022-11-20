<template>
  <base-btn
    prepend-icon="$mdiAccount"
    :disabled="isCurrent"
    :loading="loading"
    @click="handler()"
    v-if="auth.userName"
  >
    Logout {{ auth.userName }}
  </base-btn>
</template>

<script setup>
import { useAuthStore } from '@S/authenticationStore'

let loading = $ref(false)
let auth = useAuthStore()

let handler = async () => {
  loading = true
  await auth.logout()
  loading = false
}
</script>
