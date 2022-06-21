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
import { mapActions, mapGetters } from 'vuex'

import { FETCH_JOBS, FILTERED_JOBS_BY_ORGANIZATIONS } from '@/store/constants'

import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  computed: {
    ...mapGetters([FILTERED_JOBS_BY_ORGANIZATIONS]),
    currentPage() {
      return +this.$route.query.page || 1
    },
    previousPage() {
      const previousPage = this.currentPage - 1
      return previousPage >= 1 ? previousPage : null
    },
    nextPage() {
      const nextPage = this.currentPage + 1
      const maxPage = Math.ceil(this.FILTERED_JOBS_BY_ORGANIZATIONS.length / 10)
      return nextPage <= maxPage ? nextPage : null
    },
    displayedJobs() {
      const indices = [(this.currentPage - 1) * 10, this.currentPage * 10]
      return this.FILTERED_JOBS_BY_ORGANIZATIONS.slice(...indices)
    },
  },
  async mounted() {
    this.FETCH_JOBS()
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
}
</script>
