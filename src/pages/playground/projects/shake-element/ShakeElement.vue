<template>
  <VContainer fluid class="fill-height d-flex align-center">
    <VCard class="mx-auto pa-3" width="500" min-height="200" :class="{ shake }">
      <VCardTitle v-text="`Shake on wrong credentials`" />
      <VCardText>
        <div class="mb-5">
          <code> {{ loginForm }}</code>
        </div>
        <form @submit.prevent="login()">
          <VRow>
            <VCol cols="12">
              <VTextField v-model="form.username" label="Account" />
            </VCol>
            <VCol>
              <VTextField
                label="Password"
                type="password"
                v-model="form.password"
              />
            </VCol>
          </VRow>
          <VCardActions>
            <VSpacer />
            <BaseBtn type="submit">Login</BaseBtn>
          </VCardActions>
        </form>
      </VCardText>
    </VCard>
  </VContainer>
</template>

<script setup>
defineOptions({
  name: 'playgroundShakeLogin',
})

let form = reactive({
  username: '',
  password: '',
})

let shake = $ref(false)

function login() {
  console.log('Login form submitted.')
  shake = true

  setTimeout(() => {
    shake = false
  }, 500)
}
</script>

<style>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
<route lang="yaml">
meta:
  title: Shake window
  description: Shake window on wrong auth credentials validation.
  icon: '$mdiWindowMaximize'
</route>
