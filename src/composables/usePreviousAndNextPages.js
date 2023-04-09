import { computed } from "vue";

const usePreviousAndNextPages = (currentPage) => {
  const previousPage = computed(() => {
    const previousPage = currentPage.value - 1;
    return previousPage >= 1 ? previousPage : null;
  });

  const nextPage = computed((currentPage, maxPage) => {
    const nextPage = currentPage.value + 1;
    return nextPage <= maxPage.value ? nextPage : null;
  });

  return { previousPage, nextPage };
};

export default usePreviousAndNextPages;
