import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";

import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const FILTERED_JOBS_BY_JOB_TYPES = "FILTERED_JOBS_BY_JOB_TYPES";
export const FILTERED_JOBS_BY_ORGANIZATIONS = "FILTERED_JOBS_BY_ORGANIZATIONS";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
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
    [FILTERED_JOBS]({ jobs }) {
      const { selectedJobTypes, selectedOrganizations } = useUserStore();
      const noSelectedJobTypes = selectedJobTypes.length === 0;
      const noSelectedOrganizations = selectedOrganizations.length === 0;
      if (noSelectedJobTypes && noSelectedOrganizations) return jobs;

      return jobs
        .filter(({ jobType }) => selectedJobTypes.includes(jobType))
        .filter(({ organization }) => selectedJobTypes.includes(organization));
    },
    [FILTERED_JOBS_BY_JOB_TYPES]({ jobs }) {
      const { selectedJobTypes } = useUserStore();
      return selectedJobTypes.length > 0
        ? jobs.filter(({ jobType }) => selectedJobTypes.includes(jobType))
        : jobs;
    },
    [FILTERED_JOBS_BY_ORGANIZATIONS]({ jobs }) {
      const { selectedOrganizations } = useUserStore();
      return selectedOrganizations.length > 0
        ? jobs.filter(({ organization }) =>
            selectedOrganizations.includes(organization)
          )
        : jobs;
    },
    [UNIQUE_JOB_TYPES]({ jobs }) {
      const uniqueJobTypes = new Set();
      jobs.forEach(({ jobType }) => uniqueJobTypes.add(jobType));
      return uniqueJobTypes;
    },
    [UNIQUE_ORGANIZATIONS]({ jobs }) {
      const uniqueOrganizations = new Set();
      jobs.forEach(({ organization }) => uniqueOrganizations.add(organization));
      return uniqueOrganizations;
    },
  },
});
