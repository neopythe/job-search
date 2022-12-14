<template>
  <main-nav />
  <hero-section />
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import MainNav from "@/components/MainNav.vue";

export default {
  name: "App",
  components: {
    HeroSection,
    MainNav,
  },
};
</script>
