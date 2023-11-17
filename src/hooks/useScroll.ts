
import { ref } from 'vue'
const pageScroll = ref(-1)
export const useScroll = () => {
    return {
        pageScroll
    }
}