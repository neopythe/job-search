import { render, screen } from "@testing-library/vue";
import axios from "axios";

import SpotlightGallery from "@/components/JobSearch/SpotlightGallery.vue";

vi.mock("axios");

describe("SpotlightGallery", () => {
  it("provides image to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some image",
          title: "Some title",
          description: "Some description",
        },
      ],
    });
    render(SpotlightGallery, {
      slots: {
        default: `
          <template #default="{ img }">
            <p>{{ img }}</p>
          </template>`,
      },
    });
    const text = await screen.findByText("Some image");

    expect(text).toBeInTheDocument();
  });

  it("provides title to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some image",
          title: "Some title",
          description: "Some description",
        },
      ],
    });
    render(SpotlightGallery, {
      slots: {
        default: `
          <template #default="{ title }">
            <p>{{ title }}</p>
          </template>`,
      },
    });
    const text = await screen.findByText("Some title");

    expect(text).toBeInTheDocument();
  });

  it("provides description to parent component", async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          img: "Some image",
          title: "Some title",
          description: "Some description",
        },
      ],
    });
    render(SpotlightGallery, {
      slots: {
        default: `
          <template #default="{ description }">
            <p>{{ description }}</p>
          </template>`,
      },
    });
    const text = await screen.findByText("Some description");

    expect(text).toBeInTheDocument();
  });
});
