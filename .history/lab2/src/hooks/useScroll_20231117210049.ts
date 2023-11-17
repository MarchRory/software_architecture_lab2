
import { ComponentInternalInstance, getCurrentInstance, ref } from 'vue'
const pageScroll = ref(0)
export const useScroll = () => {
    return {
        pageScroll
    }
}