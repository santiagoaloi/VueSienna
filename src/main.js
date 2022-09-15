import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles'

// Segregate autoimport  from Vue instanciation.
import autoImportPlugins from './utils/autoImportPlugins'

const app = createApp(App)
autoImportPlugins(app)

app.mount('#app')
