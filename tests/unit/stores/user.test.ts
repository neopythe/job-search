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

  it("stores job types by which the user would like to filter jobs", () => {
    const store = useUserStore();

    expect(store.selectedJobTypes).toEqual([]);
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

  describe("ADD_SELECTED_JOB_TYPES", () => {
    it("updates job types by which the user has chosen to filter jobs", () => {
      const store = useUserStore();
      store.ADD_SELECTED_JOB_TYPES(["Full-time", "Part-time"]);

      expect(store.selectedJobTypes).toEqual(["Full-time", "Part-time"]);
    });
  });

  describe("ADD_SELECTED_ORGANIZATIONS", () => {
    it("updates organizations by which the user has chosen to filter jobs", () => {
      const store = useUserStore();
      store.ADD_SELECTED_ORGANIZATIONS(["Org1", "Org2"]);

      expect(store.selectedOrganizations).toEqual(["Org1", "Org2"]);
    });
  });

  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const store = useUserStore();
      store.LOGIN_USER();

      expect(store.isLoggedIn).toBe(true);
    });
  });
});