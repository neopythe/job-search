<template>
  <main-nav />
  <hero-section />
</template>

<script>
import HeroSection from "@/components/JobSearch/HeroSection.vue";
import MainNav from "@/components/Navigation/MainNav.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    MainNav,
  },
};
</script>
