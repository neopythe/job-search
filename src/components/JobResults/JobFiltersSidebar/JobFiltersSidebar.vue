<template>
  <div
    :class="[
      'flex',
      'w-[23.25rem]',
      'flex-shrink-0',
      'flex-col',
      'border-r',
      'border-brand-gray-1',
      'p-4',
      heightClass,
    ]"
  >
    <section class="pb-5">
      <job-filters-sidebar-prompt />
      <job-filters-sidebar-skills />
      <collapsible-accordion header="Degree">
        <job-filters-sidebar-degrees />
      </collapsible-accordion>
      <collapsible-accordion header="Job types">
        <job-filters-sidebar-job-types />
      </collapsible-accordion>
      <collapsible-accordion header="Organizations">
        <job-filters-sidebar-organizations />
      </collapsible-accordion>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useUserStore } from "@/stores/user";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";
import JobFiltersSidebarDegrees from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue";
import JobFiltersSidebarJobTypes from "./JobFiltersSidebarJobTypes.vue";
import JobFiltersSidebarOrganizations from "./JobFiltersSidebarOrganizations.vue";
import JobFiltersSidebarPrompt from "./JobFiltersSidebarPrompt.vue";
import JobFiltersSidebarSkills from "./JobFiltersSidebarSkills.vue";

const userStore = useUserStore();
const heightClass = computed(() =>
  userStore.isLoggedIn ? "min-h-[calc(100vh-8rem)]" : "min-h-[calc(100vh-4rem)]"
);
</script>
