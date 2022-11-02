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

const loading = $ref(false)

const auth = useAuthStore()

const { isCurrent, goTo } = useGoTo('login')

const userName = computed(() =>
  auth.userName ? `Logout ${auth.userName}` : 'Login'
)

const handler = async () => {
  loading = true
  auth.isLoggedIn ? await auth.logout() : await goTo()
  loading = false
}
</script>
