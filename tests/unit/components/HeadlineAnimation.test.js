import { nextTick } from "vue";
import { render, screen } from "@testing-library/vue";

import HeadlineAnimation from "@/components/HeadlineAnimation.vue";

describe("HeadlineAnimation", () => {
  it("displays introductory action verb", () => {
    vi.useFakeTimers();
    render(HeadlineAnimation);
    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("changes action verb at a consistent interval", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);
    render(HeadlineAnimation);

    expect(mock).toHaveBeenCalled();

    vi.useRealTimers();
  });

  it("swaps action verb after interval", async () => {
    vi.useFakeTimers();
    render(HeadlineAnimation);
    vi.advanceTimersToNextTimer();
    await nextTick();
    const actionPhrase = screen.getByRole("heading", {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("removes interval when component disappears", () => {
    vi.useFakeTimers();
    const clearInterval = vi.fn();
    vi.stubGlobal("clearInterval", clearInterval);
    const { unmount } = render(HeadlineAnimation);
    unmount();

    expect(clearInterval).toHaveBeenCalled();

    vi.useRealTimers();
  });
});
