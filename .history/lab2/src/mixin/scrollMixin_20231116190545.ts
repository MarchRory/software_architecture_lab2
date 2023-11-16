import { onBeforeRouteLeave } from "vue-router"
import { ref, onActivated } from "vue"

export const scrollMixin = (container: HTMLDivElement) => {
    const scrollHistory = ref(0)
    onBeforeRouteLeave((to, from, next) => {
        scrollHistory.value = container.scrollTop
        next()
    })
    onActivated(() => {
        if (scrollHistory.value) {
            container.scrollTop = scrollHistory.value
        }
    })
}