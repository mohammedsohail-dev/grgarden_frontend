import { createApp } from 'vue'
import App from './App.vue'
import index from '../router/index.js'

createApp(App).use(index).mount('#app')
