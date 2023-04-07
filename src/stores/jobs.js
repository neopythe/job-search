import { defineStore } from "pinia";

import getJobs from "@/api/getJobs";

import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE";
export const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
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
      return jobs
        .filter((job) => this.INCLUDE_JOB_BY_JOB_TYPE(job))
        .filter((job) => this.INCLUDE_JOB_BY_ORGANIZATION(job));
    },
    [INCLUDE_JOB_BY_JOB_TYPE]:
      () =>
      ({ jobType }) => {
        const { selectedJobTypes } = useUserStore();
        return selectedJobTypes.length > 0
          ? selectedJobTypes.includes(jobType)
          : true;
      },
    [INCLUDE_JOB_BY_ORGANIZATION]:
      () =>
      ({ organization }) => {
        const { selectedOrganizations } = useUserStore();
        return selectedOrganizations.length > 0
          ? selectedOrganizations.includes(organization)
          : true;
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
