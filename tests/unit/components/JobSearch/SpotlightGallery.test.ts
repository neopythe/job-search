import type { Mock } from "vitest";

import { render, screen } from "@testing-library/vue";
import axios from "axios";

import SpotlightGallery from "@/components/JobSearch/SpotlightGallery.vue";

vi.mock("axios");

const axiosGetMock = axios.get as Mock;

describe("SpotlightGallery", () => {
  const mockSpotlightsResponse = (spotlight = {}) => {
    axiosGetMock.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some image",
          title: "Some title",
          description: "Some description",
          ...spotlight,
        },
      ],
    });
  };

  it("provides image to parent component", async () => {
    mockSpotlightsResponse({ img: "Other image" });
    render(SpotlightGallery, {
      slots: {
        default: `
          <template #default="{ img }">
            <p>{{ img }}</p>
          </template>`,
      },
    });
    const text = await screen.findByText("Other image");

    expect(text).toBeInTheDocument();
  });

  it("provides title to parent component", async () => {
    mockSpotlightsResponse({ title: "Other title" });
    render(SpotlightGallery, {
      slots: {
        default: `
          <template #default="{ title }">
            <p>{{ title }}</p>
          </template>`,
      },
    });
    const text = await screen.findByText("Other title");

    expect(text).toBeInTheDocument();
  });

  it("provides description to parent component", async () => {
    mockSpotlightsResponse({ description: "Another description" });
    render(SpotlightGallery, {
      slots: {
        default: `
          <template #default="{ description }">
            <p>{{ description }}</p>
          </template>`,
      },
    });
    const text = await screen.findByText("Another description");

    expect(text).toBeInTheDocument();
  });
});
