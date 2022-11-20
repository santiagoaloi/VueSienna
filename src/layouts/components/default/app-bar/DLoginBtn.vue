<template>
  <base-btn
    prepend-icon="$mdiAccount"
    :disabled="isCurrent"
    :loading="loading"
    @click="handler()"
  >
    {{ userName }}
  </base-btn>
</template>

<script setup>
import { useAuthStore } from '@S/authenticationStore'
import { useGoTo } from '@/@core/composables/routerGo'

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
