import { nextTick } from "vue";
import { render, screen } from "@testing-library/vue";

import HeadlineAnimation from "@/components/JobSearch/HeadlineAnimation.vue";

describe("HeadlineAnimation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("displays introductory action verb", () => {
    render(HeadlineAnimation);
    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
  });

  it("changes action verb at a consistent interval", () => {
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);
    render(HeadlineAnimation);

    expect(mock).toHaveBeenCalled();
  });

  it("swaps action verb after interval", async () => {
    render(HeadlineAnimation);
    vi.advanceTimersToNextTimer();
    await nextTick();
    const actionPhrase = screen.getByRole("heading", {
      name: /create for everyone/i,
    });

    expect(actionPhrase).toBeInTheDocument();
  });

  it("removes interval when component disappears", () => {
    const clearInterval = vi.fn();
    vi.stubGlobal("clearInterval", clearInterval);
    const { unmount } = render(HeadlineAnimation);
    unmount();
    vi.unstubAllGlobals();

    expect(clearInterval).toHaveBeenCalled();
  });
});
