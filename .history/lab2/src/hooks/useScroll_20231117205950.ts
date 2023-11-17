
import { ComponentInternalInstance, getCurrentInstance, ref } from 'vue'
const pageScroll = ref(0)
export const useScroll = () => {
    /*const { appContext } = getCurrentInstance() as ComponentInternalInstance
    const proxy = appContext.config.globalProperties
    const { $pageScroll } = proxy */
    return {
        pageScroll
    }
}