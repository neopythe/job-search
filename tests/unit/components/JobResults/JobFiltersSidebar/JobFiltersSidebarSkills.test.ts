import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { useUserStore } from "@/stores/user";

import JobFiltersSidebarSkills from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue";

describe("JobFiltersSidebarSkills", () => {
  const renderJobFiltersSidebarSkills = () => {
    const pinia = createTestingPinia();
    const userStore = useUserStore();
    render(JobFiltersSidebarSkills, { global: { plugins: [pinia] } });
    return { userStore };
  };

  it("populates search input with store state", async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = "Programmer";
    const input = await screen.findByRole<HTMLInputElement>("textbox");

    expect(input.value).toBe("Programmer");
  });

  it("writes user input to store", async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = "";
    const input = screen.getByRole<HTMLInputElement>("textbox");
    await userEvent.type(input, "v");
    await userEvent.click(document.body);

    expect(userStore.UPDATE_SKILLS_SEARCH_TERM).toHaveBeenCalledWith("v");
  });

  it("removes whitespace from user input", async () => {
    const { userStore } = renderJobFiltersSidebarSkills();
    userStore.skillsSearchTerm = "";
    const input = screen.getByRole<HTMLInputElement>("textbox");
    await userEvent.type(input, " Vue Developer ");
    await userEvent.click(document.body);

    expect(userStore.UPDATE_SKILLS_SEARCH_TERM).toHaveBeenCalledWith(
      "Vue Developer"
    );
  });
});
