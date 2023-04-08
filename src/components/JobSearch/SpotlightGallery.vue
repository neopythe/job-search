<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      ></slot>
    </li>
  </ul>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

const spotlights = ref([]);

const getSpotlights = async () => {
  const baseUrl = import.meta.env.VITE_APP_API_URL;
  const { data } = await axios.get(`${baseUrl}/spotlights`);
  spotlights.value = data;
};

onMounted(getSpotlights);
</script>
