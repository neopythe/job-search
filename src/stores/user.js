import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedOrganizations: [],
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
});
