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
            }, {
                path: '/mainChild',
                name: 'mainChild',
                component: () => import('@/views/mainChild/index.vue'),
                meta: {
                    title: '主用户-子程序'
                }
            }, {
                path: '/OOP',
                name: "OOP",
                component: () => import('@/views/OOP/index.vue'),
                meta: {
                    title: '面向对象'
                }
            }, {
                path: '/eventSys',
                name: "eventSys",
                component: () => import("@/views/eventsSys/index.vue"),
                meta: {
                    title: '事件系统'
                }
            }, {
                path: '/pipFilter',
                name: "pipFilter",
                component: () => import('@/views/PipFilter/index.vue'),
                meta: {
                    title: "管道- 过滤器"
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