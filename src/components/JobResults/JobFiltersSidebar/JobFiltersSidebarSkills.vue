<template>
  <div class="mt-2 mb-4">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      type="text"
      class="h-12 w-full rounded border border-brand-gray-1 p-3 shadow-gray"
      placeholder="Computer programming, finance degree"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();

const skillsSearchTerm = computed({
  get: () => userStore.skillsSearchTerm,
  set: (value: string) => userStore.UPDATE_SKILLS_SEARCH_TERM(value),
});
</script>
