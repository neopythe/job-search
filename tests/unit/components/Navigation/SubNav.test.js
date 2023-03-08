import { render, screen } from "@testing-library/vue";

import SubNav from "@/components/Navigation/SubNav.vue";

const renderSubNav = (routeName) => {
  render(SubNav, {
    global: {
      mocks: {
        $route: { name: routeName },
      },
      stubs: { FontAwesomeIcon: true },
    },
  });
};

describe("SubNav", () => {
  describe("when user is on jobs page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      renderSubNav(routeName);
      const jobCount = screen.getByText("1653");

      expect(jobCount).toBeInTheDocument();
    });
  });

  describe("when user is not on jobs page", () => {
    it("does not display job count", () => {
      const routeName = "Home";
      renderSubNav(routeName);
      const jobCount = screen.queryByText("1653");

      expect(jobCount).not.toBeInTheDocument();
    });
  });
});
