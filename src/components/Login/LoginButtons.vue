<template>
  <Base-btn
    @click="button.action"
    block
    :key="i"
    v-for="(button, i) in loginButtons"
    class="my-3"
    :disabled="button.disabled"
  >
    Signup with {{ button.name }}
  </Base-btn>

  <div class="d-flex align-center my-4">
    <v-divider class="grey darken-3" /> <span class="mx-3"> or </span>
    <v-divider class="grey darken-3" />
  </div>
  <Base-btn disabled class="mt-2" block> Continue with email </Base-btn>
</template>

<script setup>
import { useAuthStore } from '@@/authenticationStore'
const router = useRouter()

const auth = useAuthStore()

async function processLogin() {
  const result = await auth.authenticateWithGoogle()
  if (result) {
    router.push('/dashboard')
  }
}

const loginButtons = [
  {
    name: 'Google',
    icon: '',
    to: '',
    disabled: false,
    action() {
      processLogin()
    },
  },
  { name: 'Github', icon: '', to: '', disabled: true },
]
</script>
