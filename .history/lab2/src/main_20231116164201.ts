import { createApp } from 'vue'
import './style.css'
import './style/index.css'
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import router from '@/router/index'
import App from './App.vue'
App.config.globalProperties.$hljs = hljs
import "tailwindcss/tailwind.css"

createApp(App).use(router).mount('#app')
