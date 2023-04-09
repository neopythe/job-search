import { defineStore } from "pinia";

import type { Job } from "@/api/types";

import getJobs from "@/api/getJobs";

import { useUserStore } from "@/stores/user";

export const FETCH_JOBS = "FETCH_JOBS";
export const FILTERED_JOBS = "FILTERED_JOBS";
export const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE";
export const INCLUDE_JOB_BY_ORGANIZATION = "INCLUDE_JOB_BY_ORGANIZATION";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";

export interface JobsState {
  jobs: Job[];
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobsState => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const jobs = await getJobs();
      this.jobs = jobs;
    },
  },
  getters: {
    [FILTERED_JOBS]({ jobs }): Job[] {
      return jobs
        .filter((job) => this.INCLUDE_JOB_BY_JOB_TYPE(job))
        .filter((job) => this.INCLUDE_JOB_BY_ORGANIZATION(job));
    },
    [INCLUDE_JOB_BY_JOB_TYPE]:
      () =>
      ({ jobType }: Job) => {
        const { selectedJobTypes } = useUserStore();
        return selectedJobTypes.length > 0
          ? selectedJobTypes.includes(jobType)
          : true;
      },
    [INCLUDE_JOB_BY_ORGANIZATION]:
      () =>
      ({ organization }: Job) => {
        const { selectedOrganizations } = useUserStore();
        return selectedOrganizations.length > 0
          ? selectedOrganizations.includes(organization)
          : true;
      },
    [UNIQUE_JOB_TYPES]({ jobs }) {
      const uniqueJobTypes = new Set<string>();
      jobs.forEach(({ jobType }) => uniqueJobTypes.add(jobType));
      return uniqueJobTypes;
    },
    [UNIQUE_ORGANIZATIONS]({ jobs }) {
      const uniqueOrganizations = new Set<string>();
      jobs.forEach(({ organization }) => uniqueOrganizations.add(organization));
      return uniqueOrganizations;
    },
  },
});
