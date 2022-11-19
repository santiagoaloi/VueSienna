<template>
  <div>
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
  </div>
</template>

<script setup>
import { useAuthStore } from '@S/authenticationStore'
import { LoginButton } from '../scripts/instances'

let auth = useAuthStore()

let buttons = $ref([
  new LoginButton({
    name: 'Google',
    icon: '$mdiGoogle',
    action() {
      return auth.authenticateWithGoogle(this)
    },
  }),
  new LoginButton({
    name: 'GitHub',
    icon: '$mdiGithub',
    disabled: true,
    action() {
      return auth.authenticateWithGithub(this)
    },
  }),
])
</script>
