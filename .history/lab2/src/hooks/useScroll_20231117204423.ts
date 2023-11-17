
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export const useScroll = () => {
    const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const proxy = appContext.config.globalProperties
    const { $pageScroll } = proxy
    return {
        $pageScroll
    }
}