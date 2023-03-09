import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  it("renders job title", () => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          title: "Vue Developer",
        },
      },
    });

    expect(screen.getByText("Vue Developer")).toBeInTheDocument();
  });

  it("renders job organization", () => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          organization: "Airbnb",
        },
      },
    });

    expect(screen.getByText("Airbnb")).toBeInTheDocument();
  });
});
