import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'hello',
        meta: {
            tabName: '主页'
        },
        component: () => import('@/views/hello/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router