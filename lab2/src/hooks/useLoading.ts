import { ref } from 'vue'

const loading = ref(false)

export const useLoading = () => {
    return {
        loading
    }
}