import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 引入 windicss 样式
import 'virtual:windi.css'   
import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
