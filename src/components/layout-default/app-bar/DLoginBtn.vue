<template>
  <BaseBtn prepend-icon="$mdiAccount" :disabled="isCurrent" @click="handler()">
    {{ userName }}
  </BaseBtn>
</template>

<script setup>
import { useAuthStore } from '@S/authenticationStore'
import { useGoTo } from '@C/routerGo'

const auth = useAuthStore()

const { isCurrent, goTo } = useGoTo('login')

const userName = computed(() =>
  auth.userName ? `Logout ${auth.userName}` : 'Login'
)

const handler = () => (auth.isLoggedIn ? auth.logout() : goTo())
</script>
