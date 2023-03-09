<template>
  <li class="mb-7">
    <router-link
      :to="jobPageLink"
      class="mx-auto block rounded border border-brand-gray-1 bg-white hover:shadow-gray"
    >
      <div class="mx-8 border-b border-brand-gray-1 pt-5 pb-2">
        <h2 class="mb-2 text-2xl font-semibold">
          Technical Program Manager, Perception, Augmented Reality
        </h2>
        <div class="flex py-1 align-middle text-sm font-semibold">
          <div class="mr-5">
            <span>Gaggle</span>
          </div>
          <div>
            <span>San Francisco, CA, USA</span>
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
              <li>Bachelor's degree or equivalent practical experience</li>
              <li>5 years of experience in program management</li>
              <li>
                Experience analyzing data through querying database (e.g. SQL),
                using spreadsheet software, and creating statistical models
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

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  computed: {
    jobPageLink() {
      return `/jobs/results/${this.job.id}`;
    },
  },
};
</script>
