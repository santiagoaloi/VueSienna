<template>
  <BaseBtn @click="handler()"> {{ userName }}</BaseBtn>
</template>

<script setup>
import { useAuthStore } from '@@/authenticationStore'

const router = useRouter()
const auth = useAuthStore()

const userName = computed(() => {
  return auth.userName ? 'Logout ' + auth.userName : 'Login'
})

function handler() {
  if (auth.isLoggedIn) {
    auth.logout()
  } else {
    router.push('login')
  }
}
</script>
