<template>
  <BaseBtn
    block
    :key="button.name"
    class="my-3"
    :disabled="button.disabled"
    :loading="button.loading"
    :prependIcon="button.icon"
    @click="button.action(button)"
    v-for="button in buttons"
  >
    Signup with {{ button.name }}
  </BaseBtn>
</template>

<script setup>
import { AuthProviderLoginButton } from '../scripts/instances'

let auth = useAuthStore()

let buttons = $ref([
  new AuthProviderLoginButton({
    name: 'Google',
    icon: '$mdiGoogle',
    action() {
      return auth.authenticateWithGoogle(this)
    },
  }),
  new AuthProviderLoginButton({
    name: 'GitHub',
    icon: '$mdiGithub',
    disabled: true,
    action() {
      return auth.authenticateWithGithub(this)
    },
  }),
])
</script>
