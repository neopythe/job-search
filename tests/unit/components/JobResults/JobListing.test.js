import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const createJobProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Airbnb",
    ...jobProps,
  });

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...jobProps,
        },
      },
    });
  };

  it("renders job title", () => {
    const jobProps = createJobProps({ title: "Vue Programmer" });
    renderJobListing(jobProps);

    expect(screen.getByText("Vue Programmer")).toBeInTheDocument();
  });

  it("renders job organization", () => {
    const jobProps = createJobProps({ organization: "Samsung" });
    renderJobListing(jobProps);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });
});
