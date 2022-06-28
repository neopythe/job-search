import { computed } from 'vue'

interface SimpleRef {
  value: number
}

const usePreviousAndNextPages = (
  currentPage: SimpleRef,
  maxPage: SimpleRef
) => {
  const previousPage = computed(() => {
    const previousPage = currentPage.value - 1
    return previousPage >= 1 ? previousPage : null
  })

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1
    return nextPage <= maxPage.value ? nextPage : null
  })

  return { previousPage, nextPage }
}

export default usePreviousAndNextPages
