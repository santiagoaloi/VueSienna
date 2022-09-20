// Auto import any styles in @/styles
import '@/styles'

import { createApp as build } from 'vue'
import CoreApp from '@/App.vue'

// Auto import any plugins in @/plugins
import autoImportPlugins from '@/utils/autoImportPlugins'

const vue = build(CoreApp)
autoImportPlugins(vue)
vue.mount('#app')
