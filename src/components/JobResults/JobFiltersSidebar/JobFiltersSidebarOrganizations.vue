<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap text-sm">
          <li
            v-for="organization in UNIQUE_ORGANIZATIONS"
            :key="organization"
            class="flex h-8 w-1/2 items-center"
          >
            <input
              id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
            />
            <label for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapState } from "pinia";

import { useJobsStore, UNIQUE_ORGANIZATIONS } from "@/stores/jobs";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarOrganizations",
  components: { CollapsibleAccordion },
  data() {
    return { selectedOrganizations: [] };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
};
</script>
