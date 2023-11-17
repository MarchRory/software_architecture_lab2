import { createApp } from 'vue'
import './style.css'
import './style/index.css'
import hljs from 'highlight.js/lib/core'
import 'highlight.js/styles/androidstudio.css'
import java from 'highlight.js/lib/languages/java'
import router from '@/router/index'
import pinia from '@/store/index'
import App from './App.vue'
import "tailwindcss/tailwind.css"
const vueApp = createApp(App)
hljs.registerLanguage('java', java)
// 高亮指令
vueApp.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
        hljs.highlightElement(block)
    })
})
vueApp.use(router).use(pinia).mount('#app')
