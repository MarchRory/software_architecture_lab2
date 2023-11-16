import { createApp } from 'vue'
import './style.css'
import './style/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common'
import 'highlight.js/styles/androidstudio.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";
import router from '@/router/index'
import App from './App.vue'
import "tailwindcss/tailwind.css"
const vueApp = createApp(App)

vueApp.directive('highlight', (el) => {
    const blocks = el.querySelectorAll('pre code')
    blocks.forEach((block: any) => {
        hljs.highlightBlock(block)
    })
})

vueApp.use(router).use(hljsVuePlugin).mount('#app')
