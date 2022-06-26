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
import { useStore } from 'vuex'

import { useFilteredJobs } from '@/store/composables'
import { FETCH_JOBS } from '@/store/constants'

import useCurrentPage from '@/composables/useCurrentPage'

import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  setup() {
    const store = useStore()
    const fetchJobs = () => {
      store.dispatch(FETCH_JOBS)
    }
    onMounted(fetchJobs)

    const filteredJobs = useFilteredJobs()

    const currentPage = useCurrentPage()

    const previousPage = computed(() => {
      const previousPage = currentPage.value - 1
      return previousPage >= 1 ? previousPage : null
    })

    const nextPage = computed(() => {
      const nextPage = currentPage.value + 1
      const maxPage = Math.ceil(filteredJobs.value.length / 10)
      return nextPage <= maxPage ? nextPage : null
    })

    const displayedJobs = computed(() => {
      const indices = [(currentPage.value - 1) * 10, currentPage.value * 10]
      return filteredJobs.value.slice(...indices)
    })

    return { currentPage, displayedJobs, nextPage, previousPage }
  },
}
</script>
