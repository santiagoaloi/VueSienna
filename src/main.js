// Auto import any styles in @/styles
import '@/styles'

import { createApp as instance } from 'vue'
import CoreApp from '@/App.vue'

// Auto import any plugins in @/plugins
import autoImportPlugins from '@/utils/autoImportPlugins'

const Vue = instance(CoreApp)
autoImportPlugins(Vue)
Vue.mount('#app')
