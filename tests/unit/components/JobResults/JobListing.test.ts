import { render, screen } from "@testing-library/vue";
import { RouterLinkStub } from "@vue/test-utils";

import type { Job } from "@/api/types";

import createJob from "tests/utils/createJob";

import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing", () => {
  const renderJobListing = (job: Job) => {
    render(JobListing, {
      global: {
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
      props: {
        job: {
          ...job,
        },
      },
    });
  };

  it("renders job title", () => {
    const job = createJob({ title: "Vue Programmer" });
    renderJobListing(job);

    expect(screen.getByText("Vue Programmer")).toBeInTheDocument();
  });

  it("renders job organization", () => {
    const job = createJob({ organization: "Samsung" });
    renderJobListing(job);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
  });

  it("renders job locations", () => {
    const job = createJob({ locations: ["Orlando", "Jacksonville"] });
    renderJobListing(job);

    expect(screen.getByText("Orlando")).toBeInTheDocument();
    expect(screen.getByText("Jacksonville")).toBeInTheDocument();
  });

  it("renders job qualifications", () => {
    const job = createJob({
      minimumQualifications: ["Code", "Develop"],
    });
    renderJobListing(job);

    expect(screen.getByText("Code")).toBeInTheDocument();
    expect(screen.getByText("Develop")).toBeInTheDocument();
  });
});
