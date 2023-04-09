import { useRoute } from "vue-router";
import { render, screen } from "@testing-library/vue";
import { flushPromises, RouterLinkStub } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";

import { useJobsStore } from "@/stores/jobs";

import JobListings from "@/components/JobResults/JobListings.vue";

vi.mock("vue-router");

describe("JobListings", () => {
  const renderJobListings = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    jobsStore.FILTERED_JOBS = Array(15).fill({});
    render(JobListings, {
      global: {
        plugins: [pinia],
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
    return { jobsStore };
  };

  it("fetches jobs", () => {
    useRoute.mockReturnValue({ query: {} });
    const { jobsStore } = renderJobListings();

    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled();
  });

  it("displays maximum of 10 jobs", async () => {
    useRoute.mockReturnValue({ query: { page: 1 } });
    const { jobsStore } = renderJobListings();
    jobsStore.FILTERED_JOBS = Array(15).fill({});
    const jobListings = await screen.findAllByRole("listitem");

    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      useRoute.mockReturnValue({ query: {} });
      renderJobListings();

      expect(screen.getByText("Page 1", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when params include page number", () => {
    it("displays page number", async () => {
      useRoute.mockReturnValue({ query: { page: 2 } });
      const { jobsStore } = renderJobListings();
      jobsStore.FILTERED_JOBS = Array(15).fill({});
      await flushPromises();

      expect(screen.getByText("Page 2", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when params include a page number less than 1", () => {
    it("displays page number 1", () => {
      useRoute.mockReturnValue({ query: { page: 0 } });
      renderJobListings();

      expect(screen.getByText("Page 1", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when params include a page number greater than the maximum", () => {
    it("displays the maximum page number", async () => {
      useRoute.mockReturnValue({ query: { page: 2 } });
      const { jobsStore } = renderJobListings();
      jobsStore.FILTERED_JOBS = Array(0).fill({});
      await flushPromises();

      expect(screen.getByText("Page 1", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", async () => {
      useRoute.mockReturnValue({ query: { page: 1 } });
      const { jobsStore } = renderJobListings();
      jobsStore.FILTERED_JOBS = Array(15).fill({});
      await flushPromises();
      const previousLink = screen.queryByRole("link", { name: /previous/i });

      expect(previousLink).not.toBeInTheDocument();
    });

    it("shows link to next page", async () => {
      useRoute.mockReturnValue({ query: { page: 1 } });
      const { jobsStore } = renderJobListings();
      jobsStore.FILTERED_JOBS = Array(15).fill({});
      await flushPromises();
      const nextLink = screen.queryByRole("link", { name: /next/i });

      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      useRoute.mockReturnValue({ query: { page: 2 } });
      const { jobsStore } = renderJobListings();
      jobsStore.FILTERED_JOBS = Array(15).fill({});
      await flushPromises();
      const nextLink = screen.queryByRole("link", { name: /next/i });

      expect(nextLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      useRoute.mockReturnValue({ query: { page: 2 } });
      const { jobsStore } = renderJobListings();
      jobsStore.FILTERED_JOBS = Array(15).fill({});
      await flushPromises();
      const previousLink = screen.queryByRole("link", { name: /previous/i });

      expect(previousLink).toBeInTheDocument();
    });
  });
});
