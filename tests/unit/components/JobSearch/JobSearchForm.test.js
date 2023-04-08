import { useRouter } from "vue-router";
import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";

import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

vi.mock("vue-router");

describe("JobSearchForm", () => {
  describe("when user submits form", () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = vi.fn();
      useRouter.mockReturnValue({ push });
      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = screen.getByRole("textbox", { name: /role/i });
      const locationInput = screen.getByRole("textbox", { name: /where?/i });
      const submitButton = screen.getByRole("button", { name: /search/i });
      await userEvent.type(roleInput, "Vue Developer");
      await userEvent.type(locationInput, "Dallas");
      await userEvent.click(submitButton);

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: { role: "Vue Developer", location: "Dallas" },
      });
    });
  });
});
