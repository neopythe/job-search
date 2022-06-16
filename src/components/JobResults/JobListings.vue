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
    displayedJobs() {
      return this.jobs.slice(0, 10)
    },
  },
  async mounted() {
    const response = await axios.get('http://localhost:3000/jobs')
    this.jobs = response.data
  },
}
</script>
