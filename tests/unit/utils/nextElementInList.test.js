import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in list and returns the next element in list", () => {
    const list = ["A", "B", "C"];
    const value = "B";
    const result = nextElementInList(list, value);

    expect(result).toBe("C");
  });

  describe("when element is at the end of the list", () => {
    it("locates element at start of the list", () => {
      const list = ["A", "B", "C"];
      const value = "C";
      const result = nextElementInList(list, value);

      expect(result).toBe("A");
    });
  });
});
