<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="block mx-auto bg-white border border-solid border-brand-gray-1 rounded hover:shadow-gray"
    >
      <div class="pt-5 pb-2 mx-8 border-b border-solid border-brand-gray-1">
        <h2 class="mb-3 text-2xl font-semibold">
          {{ job.title }}
        </h2>
        <div class="flex flex-row mb-1">
          <div class="mr-5 font-semibold text-sm">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <ul class="flex flex-row">
              <li
                v-for="location in job.locations"
                :key="location"
                class="mr-5"
              >
                <p class="text-sm">
                  {{ location }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="px-8 py-4">
        <div>
          <h3 class="mt-1 mb-2 font-semibold">Qualifications:</h3>
          <div>
            <ul class="pl-8 list-disc marker:text-brand-gray-1">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-3 text-center">
          <router-link
            :to="jobPageLink"
            class="text-sm text-brand-blue-1 font-semibold"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'JobListing',
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const jobPageLink = computed(() => `/jobs/results/${props.job.id}`)

    return { jobPageLink }
  },
}
</script>
