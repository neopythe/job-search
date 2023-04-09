import { render, screen } from "@testing-library/vue";

import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer", () => {
  it("allows parent component to provide title content", () => {
    render(HeaderContainer, {
      slots: { title: "<h2>Some title</h2>" },
    });

    expect(screen.getByText("Some title")).toBeInTheDocument();
  });

  it("allows parent component to provide subtitle content", () => {
    render(HeaderContainer, {
      slots: { subtitle: "<h3>Some subtitle</h3>" },
    });

    expect(screen.getByText("Some subtitle")).toBeInTheDocument();
  });
});
