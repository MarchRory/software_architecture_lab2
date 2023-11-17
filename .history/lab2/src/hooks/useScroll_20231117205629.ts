
import { ComponentInternalInstance, getCurrentInstance, ref } from 'vue'
export const useScroll = () => {
    /*     const pageScroll = ref(0)
        const { appContext } = getCurrentInstance() as ComponentInternalInstance
        const proxy = appContext.config.globalProperties
        const { $pageScroll } = proxy */
    return {
        pageScroll
    }
}