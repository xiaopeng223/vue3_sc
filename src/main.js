import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import {getCategoryAPI} from "@/apis/testApi"

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

getCategoryAPI().then(res=>{
    console.log(res);
})

app.mount('#app')
