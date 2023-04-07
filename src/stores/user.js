import { defineStore } from "pinia";

export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const LOGIN_USER = "LOGIN_USER";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedJobTypes: [],
    selectedOrganizations: [],
  }),
  actions: {
    [ADD_SELECTED_JOB_TYPES](jobTypes) {
      this.selectedJobTypes = jobTypes;
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations) {
      this.selectedOrganizations = organizations;
    },
    [LOGIN_USER]() {
      this.isLoggedIn = true;
    },
  },
});
