<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
  </main>
</template>

<script>
import axios from "axios";

import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
    };
  },
  computed: {
    displayedJobs() {
      const page = this.$route.query?.page || 1;
      return this.jobs.slice(page * 10 - 10, page * 10);
    },
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:3000/jobs");
    this.jobs = data;
  },
};
</script>
