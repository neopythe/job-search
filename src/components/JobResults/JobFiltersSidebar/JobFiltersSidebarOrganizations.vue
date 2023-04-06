<template>
  <collapsible-accordion header="Organizations">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap text-sm">
          <li class="flex h-8 w-1/2 items-center">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>
          <li class="flex h-8 w-1/2 items-center">
            <input id="Vue and Me" type="checkbox" class="mr-3" />
            <label for="Vue and Me">Vue and Me</label>
          </li>
          <li class="flex h-8 w-1/2 items-center">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
          <li class="flex h-8 w-1/2 items-center">
            <input id="Vue Can Do It" type="checkbox" class="mr-3" />
            <label for="Vue Can Do It">Vue Can Do It</label>
          </li>
          <li class="flex h-8 w-1/2 items-center">
            <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
            <label for="Vue and a Half Men">Vue and a Half Men</label>
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
  computed: {
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },
};
</script>
