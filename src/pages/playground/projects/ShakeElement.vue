<template>
  <v-container fluid class="fill-height d-flex align-center">
    <v-card
      class="mx-auto"
      width="500"
      min-height="200"
      :class="{ shake: shake }"
    >
      <v-card-title>Login shakable</v-card-title>
      <v-card-text>
        <div class="mb-5">
          <code> {{ loginForm }}</code>
        </div>
        <form @submit.prevent="login()">
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="username" label="Account"></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                type="password"
                v-model="password"
                label="Password"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-card-actions>
            <v-spacer></v-spacer>
            <BaseBtn type="submit">Login</BaseBtn>
          </v-card-actions>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
defineOptions({
  name: 'PlaygroundShakeLogin',
})

let loginForm = reactive({
  username: '',
  password: '',
})

let { username, password } = toRefs(loginForm)

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
