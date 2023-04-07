<template>
  <collapsible-accordion header="Job types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap text-sm">
          <li
            v-for="jobType in UNIQUE_JOB_TYPES"
            :key="jobType"
            class="flex h-8 w-1/2 items-center"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              @change="selectJobType"
            />
            <label :for="jobType">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useJobsStore, UNIQUE_JOB_TYPES } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_JOB_TYPES } from "@/stores/user";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: { CollapsibleAccordion },
  data() {
    return { selectedJobTypes: [] };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_JOB_TYPES]),
    selectJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
    },
  },
};
</script>
