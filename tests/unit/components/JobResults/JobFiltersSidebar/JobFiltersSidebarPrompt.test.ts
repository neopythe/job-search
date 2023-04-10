import { createTestingPinia } from "@pinia/testing";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import { useUserStore } from "@/stores/user";

import JobFiltersSidebarPrompt from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue";

describe("JobFiltersSidebarPrompt", () => {
  describe("when user clicks button to clear filters", () => {
    it("sends message to clear all of user's job search filters", async () => {
      const pinia = createTestingPinia();
      const userStore = useUserStore();
      render(JobFiltersSidebarPrompt, {
        global: { plugins: [pinia] },
      });
      const button = screen.getByRole("button", { name: /clear filters/i });
      await userEvent.click(button);

      expect(userStore.CLEAR_FILTERS).toHaveBeenCalled();
    });
  });
});
