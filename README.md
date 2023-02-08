![image](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![image](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![image](https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=white)
![image](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)

🔗 [Live preview ](https://santiagoaloi.github.io/VueSienna/)

### Features

---

- ⚡️ [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite) - born with fastness
- 🗂 [File based routing](./src/pages)
- 📦 [Components auto importing](./src/components)
- 📑 [Layout system](./src/layouts)
- 📥 [APIs auto importing](https://github.com/antfu/unplugin-auto-import) - use Composition API and others directly

- 🍍 [State Management via Pinia](https://pinia.vuejs.org/)
- 💾 [Pinia Persisted State](https://github.com/prazdevs/pinia-plugin-persistedstate/)

- 🤙🏻 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 🤙🏻 [Reactivity Transform](https://vuejs.org/guide/extras/reactivity-transform.html) enabled

- 🔥 [Google Firebase for authentication](https://firebase.google.com/)

- 🔆 Dark / Light theme switch with persistance

### CSS shortcuts

---

```scss
@use 'vuetify';

.buttonClass {
  @extend .text-white, .mx-2;
}
```

```html
<VBtn class="buttonClass"> ... </VBtn>
```

### Auto import plugins

---

```js
import { Vue } from '@U/instanciateVue'

// Init Vue and set new user on auth changes.
auth.onAuthStateChanged(async user => {
  Vue(user)
})
```

```js
const modules = import.meta.globEager('@M/*.js')
export default app => Object.values(modules).map(m => m.install(app))
```

```js
import { router } from '@M/routes'

export const install = app => {
  const pinia = createPinia()

  // Router can be used in any pinia store module.
  pinia.use(({ store }) => {
    store.router = markRaw(router)
  })

  app.use(pinia)
}
```

### Frameworks

---

- [Vue 3](https://vuejs.org/) - Progressive JavaScript Framework
- [Vuetify 3](https://next.vuetifyjs.com/en/) - Material Design Framework

## Recommended IDE Setup

---

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

### Plugins

---

- [Vue Macros](https://github.com/sxzz/unplugin-vue-macros)
- [Vue Router](https://github.com/vuejs/router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - file system based routing
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - layouts for pages
  - [Pinia](https://pinia.vuejs.org) - Intuitive, type safe, light and flexible Store for Vue using the composition api
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - components auto import
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - Directly use Vue Composition API and others without importing

### Coding Style

---

- Use Composition API with [`<script setup>` SFC syntax](https://github.com/vuejs/rfcs/pull/227)

- [VS Code Extensions](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - Fire up Vite server automatically
  - [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 3 `<script setup>` IDE support
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

### Project Setup

---

```sh
Yarn install
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Compile and Minify for Production

```sh
yarn build
```
