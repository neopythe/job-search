<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_ORGANIZATIONS"
    :action="userStore.ADD_SELECTED_ORGANIZATIONS"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
</script>
