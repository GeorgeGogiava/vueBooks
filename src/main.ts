import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import 'virtual:uno.css'
import './assets/css/style.css'
import * as Icons from '@ant-design/icons-vue'
const app = createApp(App)

Object.entries(Icons).forEach(([key, component]) => {
  app.component(key, component as any)
})


app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
