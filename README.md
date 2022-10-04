# Vue 3 + Vite + Vuetify + Firebase

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite) - born with fastness
- 🗂 [File based routing](./src/pages)
- 📦 [Components auto importing](./src/components)
- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)
- 📑 [Layout system](./src/layouts)
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly


## CSS shortcuts
### Done with SCSS extend

```scss
@use 'vuetify';

.buttonClass {
  @extend .text-white, .mx-2
}
```
```html
<v-btn class="buttonClass"> ... </v-btn>
```

## Auto import plugin modules.
## Verifiy firebase authentication before Vue is initialized.
### main.js example

```js
import '@/styles'
import Root from '@/App.vue'
import { auth as firebaseAuth } from '@/firebase'
import { useAuthStore } from '@@/authenticationStore'

let V
firebaseAuth.onAuthStateChanged(async authenticatedUser => {
  if (!V) {
    V = createApp(Root)
    autoImportModules(V)
    V.mount('#app')
    const auth = useAuthStore()
    auth.user = authenticatedUser
  }
})
```

### autoImportPlugins.js example
```js
export default app => {
  Object.values(import.meta.globEager('@@@/*.js')).map(m => m.install(app))
}

```

### Plugin module example
```js
// Vuetify
import { createVuetify } from 'vuetify'

export default {
  install: app => {
    const v = createVuetify()
    app.use(v)
  },
}
```


## Pre-packed
### UI Frameworks

- [Vuetify 3, Beta](https://next.vuetify.com ) - Material Design Framework


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)


### Plugins

- [Vue Macros](https://github.com/sxzz/unplugin-vue-macros)
- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
  - [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing

### Coding Style

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)


### Deploy and run

```ts
Yarn install
Yarn dev
```

### Build and preview

```ts
Yarn build:preview
```

### Highlights

- Installed "vue": "3.2.37" to avoid "beta vue reactivity transform" potential future braking changes.
