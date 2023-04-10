import { defineStore } from "pinia";

export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const LOGIN_USER = "LOGIN_USER";

export interface UserState {
  isLoggedIn: boolean;
  selectedDegrees: string[];
  selectedJobTypes: string[];
  selectedOrganizations: string[];
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedDegrees: [],
    selectedJobTypes: [],
    selectedOrganizations: [],
  }),
  actions: {
    [ADD_SELECTED_DEGREES](degrees: string[]) {
      this.selectedDegrees = degrees;
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
      this.selectedJobTypes = jobTypes;
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations: string[]) {
      this.selectedOrganizations = organizations;
    },
    [LOGIN_USER]() {
      this.isLoggedIn = true;
    },
  },
});
