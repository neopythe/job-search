import type { Mock } from "vitest";

import { useRoute } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";

import { useJobsStore } from "@/stores/jobs";

import SubNav from "@/components/Navigation/SubNav.vue";

vi.mock("vue-router");

const useRouteMock = useRoute as Mock;

const renderSubNav = () => {
  const pinia = createTestingPinia();
  const jobsStore = useJobsStore();
  render(SubNav, {
    global: {
      plugins: [pinia],
      stubs: { FontAwesomeIcon: true },
    },
  });
  return { jobsStore };
};

describe("SubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      useRouteMock.mockReturnValue({ name: "JobResults" });
      const { jobsStore } = renderSubNav();
      const jobQuantity = 16;
      // @ts-expect-error: getter is read-only
      jobsStore.FILTERED_JOBS = Array(jobQuantity).fill({});
      const jobCount = await screen.findByText(jobQuantity);

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      useRouteMock.mockReturnValue({ name: "Home" });
      const { jobsStore } = renderSubNav();
      const jobQuantity = 16;
      // @ts-expect-error: getter is read-only
      jobsStore.FILTERED_JOBS = Array(jobQuantity).fill({});
      const jobCount = screen.queryByText(jobQuantity);

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
