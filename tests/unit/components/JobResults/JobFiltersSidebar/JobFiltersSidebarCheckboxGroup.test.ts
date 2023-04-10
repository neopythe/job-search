import type { Mock } from "vitest";

import { useRouter } from "vue-router";
import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { useUserStore } from "@/stores/user";

import JobFiltersSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";

vi.mock("vue-router");

const useRouterMock = useRouter as Mock;

describe("JobFiltersSidebarCheckboxGroup", () => {
  interface JobFiltersSidebarCheckboxGroupProps {
    uniqueValues: Set<string>;
    action: Mock;
  }

  const createProps = (
    props: Partial<JobFiltersSidebarCheckboxGroupProps> = {}
  ): JobFiltersSidebarCheckboxGroupProps => ({
    uniqueValues: new Set(["ValueA", "ValueB"]),
    action: vi.fn(),
    ...props,
  });

  const renderJobFiltersSidebarCheckboxGroup = (
    props: JobFiltersSidebarCheckboxGroupProps
  ) => {
    const pinia = createTestingPinia({ stubActions: false });
    const userStore = useUserStore();
    render(JobFiltersSidebarCheckboxGroup, {
      props: {
        ...props,
      },
      global: {
        plugins: [pinia],
      },
    });
    return { userStore };
  };

  it("renders list of unique values", () => {
    const props = createProps({
      uniqueValues: new Set(["Full-time", "Intern"]),
    });
    renderJobFiltersSidebarCheckboxGroup(props);
    const jobTypeListItems = screen.getAllByRole("listitem");
    const jobTypes = jobTypeListItems.map((node) => node.textContent);

    expect(jobTypes).toEqual(["Full-time", "Intern"]);
  });

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() });
      const action = vi.fn();
      const props = createProps({
        uniqueValues: new Set(["Intern", "Part-time"]),
        action,
      });
      renderJobFiltersSidebarCheckboxGroup(props);
      const internCheckbox = screen.getByRole("checkbox", {
        name: /intern/i,
      });
      await userEvent.click(internCheckbox);

      expect(action).toHaveBeenCalledWith(["Intern"]);
    });

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      const push = vi.fn();
      useRouterMock.mockReturnValue({ push });
      const props = createProps({
        uniqueValues: new Set(["Intern"]),
      });
      renderJobFiltersSidebarCheckboxGroup(props);
      const internCheckbox = screen.getByRole("checkbox", {
        name: /intern/i,
      });
      await userEvent.click(internCheckbox);

      expect(push).toHaveBeenCalledWith({ name: "JobResults" });
    });
  });

  describe("when user clears job filters", () => {
    it("unchecks any checked checkboxes", async () => {
      useRouterMock.mockReturnValue({ push: vi.fn() });
      const props = createProps({
        uniqueValues: new Set(["Intern"]),
      });
      const { userStore } = renderJobFiltersSidebarCheckboxGroup(props);
      const internCheckboxPreAction = screen.getByRole<HTMLInputElement>(
        "checkbox",
        {
          name: /intern/i,
        }
      );
      await userEvent.click(internCheckboxPreAction);

      expect(internCheckboxPreAction.checked).toBe(true);

      userStore.CLEAR_FILTERS();
      const internCheckboxPostAction =
        await screen.findByRole<HTMLInputElement>("checkbox", {
          name: /intern/i,
        });

      expect(internCheckboxPostAction.checked).toBe(false);
    });
  });
});
