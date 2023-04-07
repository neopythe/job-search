import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";

import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const FILTERED_JOBS_BY_ORGANIZATIONS = "FILTERED_JOBS_BY_ORGANIZATIONS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },
  getters: {
    [FILTERED_JOBS_BY_ORGANIZATIONS]({ jobs }) {
      const { selectedOrganizations } = useUserStore();
      return selectedOrganizations.length > 0
        ? jobs.filter(({ organization }) =>
            selectedOrganizations.includes(organization)
          )
        : jobs;
    },
    [UNIQUE_ORGANIZATIONS]({ jobs }) {
      const uniqueOrganizations = new Set();
      jobs.forEach(({ organization }) => uniqueOrganizations.add(organization));
      return uniqueOrganizations;
    },
  },
});
