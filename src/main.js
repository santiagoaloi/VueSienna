// Auto import any styles in @/styles
import '@/styles'

// import { createApp as instance } from 'vue'
import CoreApp from '@/App'

// Auto import any plugins in @/plugins
import autoImportPlugins from '@/utils/autoImportPlugins'

const Vue = createApp(CoreApp)
autoImportPlugins(Vue)
Vue.mount('#app')
