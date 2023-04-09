import { type Ref, computed } from "vue";

const usePreviousAndNextPages = (
  currentPage: Ref<number>,
  maxPage: Ref<number>
) => {
  const previousPage = computed(() => {
    const previousPage = currentPage.value - 1;
    return previousPage >= 1 ? previousPage : null;
  });

  const nextPage = computed(() => {
    const nextPage = currentPage.value + 1;
    return nextPage <= maxPage.value ? nextPage : null;
  });

  return { previousPage, nextPage };
};

export default usePreviousAndNextPages;
