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
import { useAuthStore } from '@S/authenticationStore'

const loading = $ref(false)
const auth = useAuthStore()

const handler = async () => {
  loading = true
  await auth.logout()
  loading = false
}
</script>
