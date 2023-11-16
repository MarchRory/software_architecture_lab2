import { createApp } from 'vue'
import './style.css'
import './style/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/androidstudio.css'
import 'highlight.js/lib/languages/java'
import router from '@/router/index'
import App from './App.vue'
import "tailwindcss/tailwind.css"
const vueApp = createApp(App)
hljs.registerLanguage
// 高亮指令
vueApp.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
        hljs.highlightElement(block)
    })
})

vueApp.use(router).mount('#app')
