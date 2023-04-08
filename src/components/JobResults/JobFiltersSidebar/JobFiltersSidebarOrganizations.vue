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
              :id="organization"
              v-model="selectedOrganizations"
              :value="organization"
              type="checkbox"
              class="mr-3"
              @change="selectOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

const selectedOrganizations = ref([]);

const jobsStore = useJobsStore();
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS);

const userStore = useUserStore();
const router = useRouter();

const selectOrganization = () => {
  userStore.ADD_SELECTED_ORGANIZATIONS(selectedOrganizations.value);
  router.push({ name: "JobResults" });
};
</script>
