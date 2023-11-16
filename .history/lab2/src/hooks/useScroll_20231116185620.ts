import { onBeforeRouteLeave } from "vue-router"
import { ref } from "vue"

export const useScroll = (container: HTMLDivElement) => {
    const scrollHistory = ref(0)
    const routerLeave = onBeforeRouteLeave((to, from, next) => {
        scrollHistory.value = container.scrollTop
        next()
    })

    return {
        scrollHistory,
        routerLeave
    }
}