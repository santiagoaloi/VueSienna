<template>
  <div>
    <Base-btn
      @click="button.action(button)"
      block
      :key="i"
      v-for="(button, i) in loginButtons"
      class="my-3"
      :disabled="button.disabled"
      :loading="button.loading"
    >
      Signup with {{ button.name }}
    </Base-btn>

    <div class="d-flex align-center my-4">
      <baseDivider>or </baseDivider><baseDivider />
    </div>
    <Base-btn disabled class="mt-2" block> Continue with email </Base-btn>
  </div>
</template>

<script setup>
import { useAuthStore } from '@@/authenticationStore'

const auth = useAuthStore()

async function processLogin(button) {
  await auth.authenticateWithGoogle(button)
}

const loginButtons = $ref([
  {
    name: 'Google',
    icon: '',
    to: '',
    disabled: false,
    loading: false,
    action() {
      processLogin(this)
    },
  },
  { name: 'Github', icon: '', to: '', disabled: true },
])
</script>
