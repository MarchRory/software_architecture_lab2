import { defineStore } from "pinia";
import { routes } from "@/router";
import { RouteRecordRaw } from "vue-router";
interface ScrollType {
    scrollMap: Map<string, number>
}
export const useScrollStore = defineStore('useScrollStore', {
    state: (): ScrollType => {
        return {
            scrollMap: new Map()
        }
    },
    actions: {
        init(): void {
            const paths = routes[0].children?.map((route: RouteRecordRaw) => {
                return {
                    path: route.path,
                };
            });
            paths?.forEach((item, index) => {
                this.scrollMap.set(item.path, 0)
            })
        },
        update(routePath: string, scrollTop: number): void {
            this.scrollMap.set(routePath, scrollTop)
        },
        useScroll(routePath: string): number | undefined {
            return this.scrollMap.get(routePath)
        }
    }
})