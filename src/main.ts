import { createApp } from 'vue'
import App from '@/App.vue'

import HospitalTop from '@/components/hospitalTop.vue'
import HospitalBottom from './components/hospitalBottom.vue'
import '@/style/reset.scss'
//引入router
import router from '@/router/index'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

//引入pinia
import pinia from '../src/store/index'
import login from './components/login.vue'

// createApp(App).mount('#app')
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HospitalBottom', HospitalBottom)
app.component('Login', login)
app.use(router)
app.use(pinia)
app.use(ElementPlus, {
    locale: zhCn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')






