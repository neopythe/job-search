import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { useJobsStore } from "@/stores/jobs";
import { useUserStore } from "@/stores/user";

import JobFiltersSidebarOrganizations from "@/components/JobResults/JobfiltersSidebar/JobFiltersSidebarOrganizations.vue";

describe("JobFiltersSidebarOrganizations", () => {
  it("renders list of unique organizations from jobs", async () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon"]);
    render(JobFiltersSidebarOrganizations, {
      global: { plugins: [pinia], stubs: { FontAwesomeIcon: true } },
    });
    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);
    const organizationListItems = screen.getAllByRole("listitem");
    const organizations = organizationListItems.map((node) => node.textContent);

    expect(organizations).toEqual(["Google", "Amazon"]);
  });

  it.only("communicates that user has selected checkbox for organization", async () => {
    const pinia = createTestingPinia();
    const jobsStore = useJobsStore();
    const userStore = useUserStore();
    jobsStore.UNIQUE_ORGANIZATIONS = new Set(["Google", "Amazon", "Facebook"]);
    render(JobFiltersSidebarOrganizations, {
      global: { plugins: [pinia], stubs: { FontAwesomeIcon: true } },
    });
    const button = screen.getByRole("button", { name: /organizations/i });
    await userEvent.click(button);
    const googleCheckbox = screen.getByRole("checkbox", {
      name: /google/i,
    });
    await userEvent.click(googleCheckbox);

    expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith([
      "Google",
    ]);
  });
});
