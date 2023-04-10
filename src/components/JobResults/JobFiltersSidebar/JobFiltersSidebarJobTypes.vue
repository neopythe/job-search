<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_JOB_TYPES"
    :action="userStore.ADD_SELECTED_JOB_TYPES"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

const jobsStore = useJobsStore();
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);

const userStore = useUserStore();
</script>
