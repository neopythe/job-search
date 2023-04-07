<template>
  <div class="h-16 w-full border-b border-brand-gray-1 bg-white">
    <div v-if="onJobResultsPage" class="flex h-full items-center px-8">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span class="font-medium"
        ><span class="text-brand-green-1">{{
          FILTERED_JOBS_BY_ORGANIZATIONS.length
        }}</span>
        jobs matched</span
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";

import { useJobsStore, FILTERED_JOBS_BY_ORGANIZATIONS } from "@/stores/jobs";

export default {
  name: "SubNav",
  computed: {
    ...mapState(useJobsStore, [FILTERED_JOBS_BY_ORGANIZATIONS]),
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
