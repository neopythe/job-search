<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <JobListing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="previous-page-link"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            data-test="next-page-link"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { computed, onMounted } from 'vue'

import { useFetchJobsDispatch, useFilteredJobs } from '@/store/composables'

import useCurrentPage from '@/composables/useCurrentPage'
import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages'

import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  setup() {
    onMounted(useFetchJobsDispatch)

    const filteredJobs = useFilteredJobs()

    const currentPage = useCurrentPage()

    const maxPage = computed(() => Math.ceil(filteredJobs.value.length / 10))

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    )

    const displayedJobs = computed(() => {
      const indices = [(currentPage.value - 1) * 10, currentPage.value * 10]
      return filteredJobs.value.slice(...indices)
    })

    return { currentPage, displayedJobs, nextPage, previousPage }
  },
}
</script>
