import { useRouter } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobfiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

vi.mock("vue-router");

describe("JobFiltersSidebarCheckboxGroup", () => {
  const createProps = (props = {}) => ({
    header: "Some header",
    uniqueValues: new Set(["ValueA", "ValueB"]),
    action: vi.fn(),
    ...props,
  });

  const renderJobFiltersSidebarCheckboxGroup = (props) => {
    const pinia = createTestingPinia();
    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props,
      },
      global: {
        plugins: [pinia],
        stubs: { FontAwesomeIcon: true },
      },
    });
  };

  it("renders list of unique values", async () => {
    const props = createProps({
      header: "Job types",
      uniqueValues: new Set(["Full-time", "Intern"]),
    });
    renderJobFiltersSidebarCheckboxGroup(props);
    const button = screen.getByRole("button", { name: /job types/i });
    await userEvent.click(button);
    const jobTypeListItems = screen.getAllByRole("listitem");
    const jobTypes = jobTypeListItems.map((node) => node.textContent);

    expect(jobTypes).toEqual(["Full-time", "Intern"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      useRouter.mockReturnValue({ push: vi.fn() });
      const action = vi.fn();
      const props = createProps({
        header: "Job types",
        uniqueValues: new Set(["Intern", "Part-time"]),
        action,
      });
      renderJobFiltersSidebarCheckboxGroup(props);
      const button = screen.getByRole("button", { name: /job types/i });
      await userEvent.click(button);
      const internCheckbox = screen.getByRole("checkbox", {
        name: /intern/i,
      });
      await userEvent.click(internCheckbox);

      expect(action).toHaveBeenCalledWith(["Intern"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      const push = vi.fn();
      useRouter.mockReturnValue({ push });
      const props = createProps({
        header: "Job types",
        uniqueValues: new Set(["Intern"]),
      });
      renderJobFiltersSidebarCheckboxGroup(props);
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
