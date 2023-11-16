import { createApp } from 'vue'
import './style.css'
import './style/index.css'
import 'highlight.js/styles/stackoverflow-light.css';
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/androidstudio.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";
import router from '@/router/index'
import App from './App.vue'
import "tailwindcss/tailwind.css"

createApp(App).use(router).use(hljsVuePlugin).mount('#app')
