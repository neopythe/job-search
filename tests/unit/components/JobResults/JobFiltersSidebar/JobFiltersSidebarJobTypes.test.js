import { useRouter } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import JobFiltersSidebarJobTypes from "@/components/JobResults/JobfiltersSidebar/JobFiltersSidebarJobTypes.vue";

vi.mock("vue-router");

describe("JobFiltersSidebarJobTypes", () => {
  const renderJobFiltersSidebarJobTypes = () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    const userStore = useUserStore();
    render(JobFiltersSidebarJobTypes, {
      global: {
        plugins: [pinia],
        stubs: { FontAwesomeIcon: true },
      },
    });

    return { jobsStore, userStore };
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
      useRouter.mockReturnValue({ push: vi.fn() });
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
      const push = vi.fn();
      useRouter.mockReturnValue({ push });
      const { jobsStore } = renderJobFiltersSidebarJobTypes();
      jobsStore.UNIQUE_JOB_TYPES = new Set(["Intern"]);
      const button = screen.getByRole("button", { name: /job types/i });
      await userEvent.click(button);
      const internCheckbox = screen.getByRole("checkbox", {
        name: /intern/i,
      });
      await userEvent.click(internCheckbox);

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });
});
