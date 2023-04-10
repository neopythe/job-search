import { ref } from "vue";
import { defineStore } from "pinia";

import type { Degree } from "@/api/types";

import getDegrees from "@/api/getDegrees";

export const useDegreesStore = defineStore("degrees", () => {
  const degrees = ref<Degree[]>([]);

  const FETCH_DEGREES = async () => {
    const receivedDegrees = await getDegrees();
    degrees.value = receivedDegrees;
  };

  return { degrees, FETCH_DEGREES };
});
