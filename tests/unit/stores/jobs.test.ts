import type { Mock } from "vitest";

import { createPinia, setActivePinia } from "pinia";
import axios from "axios";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import createJob from "tests/utils/createJob";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("stores job listings", () => {
    const store = useJobsStore();

    expect(store.jobs).toEqual([]);
  });
});

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("FETCH_JOBS", () => {
    it("makes API request and stores received jobs", async () => {
      axiosGetMock.mockResolvedValue({ data: ["Job 1", "Job 2"] });
      const store = useJobsStore();
      await store.FETCH_JOBS();

      expect(store.jobs).toEqual(["Job 1", "Job 2"]);
    });
  });
});

describe("getters", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("INCLUDE_JOB_BY_DEGREE", () => {
    describe("when the user has not selected any degrees", () => {
      it("includes degree", () => {
        const userStore = useUserStore();
        userStore.selectedDegrees = [];
        const jobsStore = useJobsStore();
        const job = createJob({ degree: "Bachelor's" });
        const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job);

        expect(result).toBe(true);
      });
    });

    it("identifies whether job is associated with given degrees", () => {
      const userStore = useUserStore();
      userStore.selectedDegrees = ["Associate", "Bachelor's"];
      const jobsStore = useJobsStore();
      const job = createJob({ degree: "Associate" });
      const result = jobsStore.INCLUDE_JOB_BY_DEGREE(job);

      expect(result).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job types", () => {
      it("includes job", () => {
        const userStore = useUserStore();
        userStore.selectedJobTypes = [];
        const jobsStore = useJobsStore();
        const job = createJob({ jobType: "Full-time" });
        const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

        expect(result).toBe(true);
      });
    });

    it("identifies whether job is associated with given job types", () => {
      const userStore = useUserStore();
      userStore.selectedJobTypes = ["Intern", "Part-time"];
      const jobsStore = useJobsStore();
      const job = createJob({ jobType: "Intern" });
      const result = jobsStore.INCLUDE_JOB_BY_JOB_TYPE(job);

      expect(result).toBe(true);
    });
  });

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const userStore = useUserStore();
        userStore.selectedOrganizations = [];
        const jobsStore = useJobsStore();
        const job = createJob({ organization: "Google" });
        const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

        expect(result).toBe(true);
      });
    });

    it("identifies whether job is associated with given organizations", () => {
      const userStore = useUserStore();
      userStore.selectedOrganizations = ["Google", "Microsoft"];
      const jobsStore = useJobsStore();
      const job = createJob({ organization: "Google" });
      const result = jobsStore.INCLUDE_JOB_BY_ORGANIZATION(job);

      expect(result).toBe(true);
    });
  });

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const store = useJobsStore();
      store.jobs = [
        createJob({ jobType: "Intern" }),
        createJob({ jobType: "Part-time" }),
        createJob({ jobType: "Intern" }),
      ];
      const result = store.UNIQUE_JOB_TYPES;

      expect(result).toEqual(new Set(["Intern", "Part-time"]));
    });
  });

  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const store = useJobsStore();
      store.jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ];
      const result = store.UNIQUE_ORGANIZATIONS;

      expect(result).toEqual(new Set(["Google", "Amazon"]));
    });
  });
});
