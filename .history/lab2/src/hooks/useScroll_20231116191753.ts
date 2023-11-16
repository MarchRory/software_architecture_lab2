import { ref } from "vue"

export const useScroll = (container: HTMLDivElement | undefined) => {
    const scrollHistory = ref(0)
    function onBeforeRouteLeaveCallBack(to, from, next) {
        if (container) {
            scrollHistory.value = container.scrollTop
        }
        next()
    }
    function onActivatedCallback() {
        if (scrollHistory.value && container) {
            container.scrollTop = scrollHistory?.value
        }
    }
    return {
        scrollHistory,
        onBeforeRouteLeaveCallBack,
        onActivatedCallback
    }
}