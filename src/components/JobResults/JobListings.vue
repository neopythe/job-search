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
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'

import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    }
  },
  computed: {
    currentPage() {
      return +this.$route.query.page || 1
    },
    displayedJobs() {
      const indices = [(this.currentPage - 1) * 10, this.currentPage * 10]
      return this.jobs.slice(...indices)
    },
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs')
    this.jobs = response.data
  },
}
</script>
