<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "SpotlightGallery",
  data() {
    return { spotlights: [] };
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;
    const { data } = await axios.get(`${baseUrl}/spotlights`);
    this.spotlights = data;
  },
};
</script>
