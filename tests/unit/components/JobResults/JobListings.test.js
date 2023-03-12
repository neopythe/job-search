import { render, screen } from "@testing-library/vue";
import { flushPromises, RouterLinkStub } from "@vue/test-utils";
import axios from "axios";

import JobListings from "@/components/JobResults/JobListings.vue";

vi.mock("axios");

describe("JobListings", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: 5,
      ...queryParams,
    },
  });

  const renderJobListings = ($route) => {
    render(JobListings, {
      global: {
        mocks: {
          $route,
        },
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });
  };

  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    const $route = createRoute();
    renderJobListings($route);

    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });

  it("displays maximum of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const $route = createRoute({ page: 1 });
    renderJobListings($route);
    const jobListings = await screen.findAllByRole("listitem");

    expect(jobListings).toHaveLength(10);
  });

  describe("when params exclude page number", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: undefined });
      renderJobListings($route);

      expect(screen.getByText("Page 1", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when params include page number", () => {
    it("displays page number", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 2 });
      renderJobListings($route);
      await flushPromises();

      expect(screen.getByText("Page 2", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when params include a page number less than 1", () => {
    it("displays page number 1", () => {
      const $route = createRoute({ page: 0 });
      renderJobListings($route);

      expect(screen.getByText("Page 1", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when params include a page number greater than the maximum", () => {
    it("displays the maximum page number", () => {
      const $route = createRoute({ page: 2 });
      renderJobListings($route);

      expect(screen.getByText("Page 1", { exact: false })).toBeInTheDocument();
    });
  });

  describe("when user is on first page", () => {
    it("does not show link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 1 });
      renderJobListings($route);
      await flushPromises();
      const previousLink = screen.queryByRole("link", { name: /previous/i });

      expect(previousLink).not.toBeInTheDocument();
    });

    it("shows link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 1 });
      renderJobListings($route);
      await flushPromises();
      const nextLink = screen.queryByRole("link", { name: /next/i });

      expect(nextLink).toBeInTheDocument();
    });
  });

  describe("when user is on last page", () => {
    it("does not show link to next page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 2 });
      renderJobListings($route);
      await flushPromises();
      const nextLink = screen.queryByRole("link", { name: /next/i });

      expect(nextLink).not.toBeInTheDocument();
    });

    it("shows link to previous page", async () => {
      axios.get.mockResolvedValue({ data: Array(15).fill({}) });
      const $route = createRoute({ page: 2 });
      renderJobListings($route);
      await flushPromises();
      const previousLink = screen.queryByRole("link", { name: /previous/i });

      expect(previousLink).toBeInTheDocument();
    });
  });
});
