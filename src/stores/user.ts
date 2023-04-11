import { ref } from "vue";
import { defineStore } from "pinia";

export const ADD_SELECTED_DEGREES = "ADD_SELECTED_DEGREES";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const LOGIN_USER = "LOGIN_USER";

export const useUserStore = defineStore("user", () => {
  const isLoggedIn = ref(false);
  const selectedDegrees = ref<string[]>([]);
  const selectedJobTypes = ref<string[]>([]);
  const selectedOrganizations = ref<string[]>([]);
  const skillsSearchTerm = ref("");

  const ADD_SELECTED_DEGREES = (degrees: string[]) => {
    selectedDegrees.value = degrees;
  };

  const ADD_SELECTED_JOB_TYPES = (jobTypes: string[]) => {
    selectedJobTypes.value = jobTypes;
  };

  const ADD_SELECTED_ORGANIZATIONS = (organizations: string[]) => {
    selectedOrganizations.value = organizations;
  };

  const CLEAR_FILTERS = () => {
    selectedDegrees.value = [];
    selectedJobTypes.value = [];
    selectedOrganizations.value = [];
    skillsSearchTerm.value = "";
  };

  const LOGIN_USER = () => {
    isLoggedIn.value = true;
  };

  const UPDATE_SKILLS_SEARCH_TERM = (searchTerm: string) => {
    skillsSearchTerm.value = searchTerm;
  };

  return {
    isLoggedIn,
    selectedDegrees,
    selectedJobTypes,
    selectedOrganizations,
    skillsSearchTerm,
    ADD_SELECTED_DEGREES,
    ADD_SELECTED_JOB_TYPES,
    ADD_SELECTED_ORGANIZATIONS,
    CLEAR_FILTERS,
    LOGIN_USER,
    UPDATE_SKILLS_SEARCH_TERM,
  };
});
