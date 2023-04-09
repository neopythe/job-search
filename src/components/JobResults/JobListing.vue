<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="mx-auto block rounded border border-brand-gray-1 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-brand-gray-1 pt-5 pb-2">
        <h2 class="mb-2 text-2xl font-semibold">
          {{ job.title }}
        </h2>
        <div class="flex py-1 align-middle text-sm">
          <div class="mr-5 font-semibold">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul>
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5 inline-block"
              >
                <span>{{ location }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2 font-semibold">Qualifications:</h3>
          <div>
            <ul
              class="flex list-disc flex-col gap-1 pl-8 marker:text-brand-gray-1"
            >
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-4 text-center text-sm font-semibold">
          <router-link :to="jobPageLink" class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div></router-link
    >
  </li>
</template>

<script setup lang="ts">
import { type PropType, computed } from "vue";

import type { Job } from "@/api/types";

const props = defineProps({
  job: {
    type: Object as PropType<Job>,
    required: true,
  },
});

const jobPageLink = computed(() => `/jobs/results/${props.job.id}`);
</script>
