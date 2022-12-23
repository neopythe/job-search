<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-brand-gray-1 px-8"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="flex h-full items-center whitespace-nowrap"
        >
          Gaggle Careers
        </router-link>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none gap-9">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="h-full"
            >
              <router-link
                :to="menuItem.route"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.text }}
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", route: { name: "Home" } },
        { text: "Locations", route: { name: "Home" } },
        { text: "Benefits", route: { name: "Home" } },
        { text: "Jobs", route: { name: "JobResults" } },
        { text: "Students", route: { name: "Home" } },
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
