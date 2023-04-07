import { createPinia, setActivePinia } from "pinia";

import { useUserStore } from "@/stores/user";

describe("state", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("monitors whether user is logged in", () => {
    const store = useUserStore();

    expect(store.isLoggedIn).toBe(false);
  });

  it("stores organizations by which the user would like to filter jobs", () => {
    const store = useUserStore();

    expect(store.selectedOrganizations).toEqual([]);
  });
});

describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  describe("loginUser", () => {
    it("logs the user in", () => {
      const store = useUserStore();
      store.loginUser();

      expect(store.isLoggedIn).toBe(true);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations by which the user has chosen to filter jobs", () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(["Org1", "Org2"]);

      expect(store.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });
});
