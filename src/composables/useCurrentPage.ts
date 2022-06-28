import { computed } from 'vue'
import { useRoute } from 'vue-router'

const useCurrentPage = () => {
  const route = useRoute()
  const page = route.query.page as string
  return computed(() => +page || 1)
}

export default useCurrentPage
