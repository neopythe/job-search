<template>
  <div class="flex w-full flex-nowrap">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script setup lang="ts">
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";
import JobListings from "@/components/JobResults/JobListings.vue";
</script>
