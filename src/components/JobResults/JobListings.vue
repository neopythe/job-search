<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <section class="mx-auto max-w-[61.25rem]">
      <ol>
        <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
      </ol>
      <div class="mx-auto mt-10">
        <div class="flex flex-nowrap">
          <p class="flex-grow text-sm">
            Page {{ currentPage }} of {{ maxPage }}
          </p>
          <div class="flex items-center justify-center gap-6">
            <router-link
              v-if="previousPage"
              :to="{ name: 'JobResults', query: { page: previousPage } }"
              role="link"
              class="text-sm font-semibold text-brand-blue-1"
              >Previous</router-link
            >
            <router-link
              v-if="nextPage"
              :to="{ name: 'JobResults', query: { page: nextPage } }"
              role="link"
              class="text-sm font-semibold text-brand-blue-1"
              >Next</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia";

import {
  useJobsStore,
  FETCH_JOBS,
  FILTERED_JOBS_BY_JOB_TYPES,
  // FILTERED_JOBS_BY_ORGANIZATIONS,
} from "@/stores/jobs";

import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  computed: {
    ...mapState(useJobsStore, {
      FILTERED_JOBS_BY_JOB_TYPES,
      displayedJobs() {
        const page = this.currentPage;
        return this.FILTERED_JOBS_BY_JOB_TYPES.slice(page * 10 - 10, page * 10);
      },
      maxPage() {
        return Math.ceil(this.FILTERED_JOBS_BY_JOB_TYPES.length / 10) || 1;
      },
    }),
    currentPage() {
      if (this.$route.query?.page < 1) return 1;
      if (this.$route.query?.page > this.maxPage) return this.maxPage;
      return parseInt(this.$route.query?.page) || 1;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      return nextPage <= this.maxPage ? nextPage : null;
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      return previousPage >= 1 ? previousPage : null;
    },
  },
  async mounted() {
    this.FETCH_JOBS();
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
};
</script>
