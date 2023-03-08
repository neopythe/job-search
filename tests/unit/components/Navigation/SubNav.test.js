import { render, screen } from "@testing-library/vue";

import SubNav from "@/components/Navigation/SubNav.vue";

describe("SubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      const $route = { name: "JobResults" };
      render(SubNav, {
        global: {
          mocks: { $route },
          stubs: { FontAwesomeIcon: true },
        },
      });
      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      const $route = { name: "Home" };
      render(SubNav, {
        global: {
          mocks: { $route },
          stubs: { FontAwesomeIcon: true },
        },
      });
      const jobCount = screen.queryByText("1653");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
