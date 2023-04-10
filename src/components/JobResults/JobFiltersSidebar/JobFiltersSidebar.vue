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
      <div class="flex flex-row justify-between">
        <h3 class="my-3 font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear filters" type="secondary" />
        </div>
      </div>
      <job-filters-sidebar-checkbox-group
        header="Degree"
        :unique-values="UNIQUE_DEGREES"
        :action="userStore.ADD_SELECTED_DEGREES"
      />
      <job-filters-sidebar-checkbox-group
        header="Job types"
        :unique-values="UNIQUE_JOB_TYPES"
        :action="userStore.ADD_SELECTED_JOB_TYPES"
      />
      <job-filters-sidebar-checkbox-group
        header="Organizations"
        :unique-values="UNIQUE_ORGANIZATIONS"
        :action="userStore.ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useDegreesStore } from "@/stores/degrees";
import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/Shared/ActionButton.vue";
import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

const degreesStore = useDegreesStore();
const UNIQUE_DEGREES = computed(() => degreesStore.UNIQUE_DEGREES);

const jobsStore = useJobsStore();
const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES);
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
const heightClass = computed(() =>
  userStore.isLoggedIn ? "min-h-[calc(100vh-8rem)]" : "min-h-[calc(100vh-4rem)]"
);
</script>
