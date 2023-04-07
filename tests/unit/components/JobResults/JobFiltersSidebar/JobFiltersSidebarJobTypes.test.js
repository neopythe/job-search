import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobfiltersSidebar/JobFiltersSidebarJobTypes.vue";

describe("JobFiltersSidebarJobTypes", () => {
  const renderJobFiltersSidebarJobTypes = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    const userStore = useUserStore();
    const $router = { push: vi.fn() };
    render(JobFiltersSidebarJobTypes, {
      global: {
        plugins: [pinia],
        mocks: { $router },
        stubs: { FontAwesomeIcon: true },
      },
    });

    return { jobsStore, userStore, $router };
  };

  it("renders list of unique job types from jobs", async () => {
    const { jobsStore } = renderJobFiltersSidebarJobTypes();
    jobsStore.UNIQUE_JOB_TYPES = new Set(["Full-time", "Intern"]);
    const button = screen.getByRole("button", { name: /job types/i });
    await userEvent.click(button);
    const jobTypeListItems = screen.getAllByRole("listitem");
    const jobTypes = jobTypeListItems.map((node) => node.textContent);

    expect(jobTypes).toEqual(["Full-time", "Intern"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for job type", async () => {
      const { jobsStore, userStore } = renderJobFiltersSidebarJobTypes();
      jobsStore.UNIQUE_JOB_TYPES = new Set(["Intern", "Part-time"]);
      const button = screen.getByRole("button", { name: /job types/i });
      await userEvent.click(button);
      const internCheckbox = screen.getByRole("checkbox", {
        name: /intern/i,
      });
      await userEvent.click(internCheckbox);

      expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith(["Intern"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      const { jobsStore, $router } = renderJobFiltersSidebarJobTypes();
      jobsStore.UNIQUE_JOB_TYPES = new Set(["Intern"]);
      const button = screen.getByRole("button", { name: /job types/i });
      await userEvent.click(button);
      const internCheckbox = screen.getByRole("checkbox", {
        name: /intern/i,
      });
      await userEvent.click(internCheckbox);

      expect($router.push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
