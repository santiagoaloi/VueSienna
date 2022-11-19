<template>
  <BaseBtn
    prepend-icon="$mdiAccount"
    :disabled="isCurrent"
    :loading="loading"
    @click="handler()"
  >
    {{ userName }}
  </BaseBtn>
</template>

<script setup>
import { useAuthStore } from '@S/authenticationStore'
import { useGoTo } from '@C/routerGo'

let loading = $ref(false)

let auth = useAuthStore()

let { isCurrent, goTo } = useGoTo('login')

let userName = computed(() =>
  auth.userName ? `Logout ${auth.userName}` : 'Login'
)

let handler = async () => {
  loading = true
  auth.isLoggedIn ? await auth.logout() : await goTo()
  loading = false
}
</script>
