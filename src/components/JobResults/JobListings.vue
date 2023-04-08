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

<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import { useJobsStore } from "@/stores/jobs";

import JobListing from "@/components/JobResults/JobListing.vue";

const jobsStore = useJobsStore();
const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS);

onMounted(jobsStore.FETCH_JOBS);

const route = useRoute();

const displayedJobs = computed(() => {
  const page = currentPage.value;
  return FILTERED_JOBS.value.slice(page * 10 - 10, page * 10);
});

const currentPage = computed(() => {
  if (route.query?.page < 1) return 1;
  if (route.query?.page > maxPage.value) return maxPage.value;
  return parseInt(route.query?.page) || 1;
});

const previousPage = computed(() => {
  const previousPage = currentPage.value - 1;
  return previousPage >= 1 ? previousPage : null;
});

const nextPage = computed(() => {
  const nextPage = currentPage.value + 1;
  return nextPage <= maxPage.value ? nextPage : null;
});

const maxPage = computed(() => {
  return Math.ceil(FILTERED_JOBS.value.length / 10) || 1;
});
</script>
