<template>
  <job-filters-sidebar-checkbox-group
    :unique-values="UNIQUE_DEGREES"
    :action="userStore.ADD_SELECTED_DEGREES"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useDegreesStore } from "@/stores/degrees";
import { useUserStore } from "@/stores/user";

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

const degreesStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES);

const userStore = useUserStore();
</script>
