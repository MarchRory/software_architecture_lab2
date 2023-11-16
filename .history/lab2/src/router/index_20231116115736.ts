import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'hello',
        meta: {
            tabName: '主页'
        },
        component: () => import('@/layout/index.vue'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/hello/index.vue'),
                meta: {
                    title: '首页'
                }
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router