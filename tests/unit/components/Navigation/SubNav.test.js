import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";

import { useJobsStore } from "@/stores/jobs";

import SubNav from "@/components/Navigation/SubNav.vue";

const renderSubNav = (routeName) => {
  const pinia = createTestingPinia();
  const jobsStore = useJobsStore();
  render(SubNav, {
    global: {
      plugins: [pinia],
      mocks: {
        $route: { name: routeName },
      },
      stubs: { FontAwesomeIcon: true },
    },
  });
  return { jobsStore };
};

describe("SubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", async () => {
      const { jobsStore } = renderSubNav("JobResults");
      const jobQuantity = 16;
      jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(jobQuantity).fill({});
      const jobCount = await screen.findByText(jobQuantity);

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      const { jobsStore } = renderSubNav("Home");
      const jobQuantity = 16;
      jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(jobQuantity).fill({});
      const jobCount = screen.queryByText(jobQuantity);

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
