<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-3 font-semibold">What do you want to do?</h3>
    <div class="flex items-center text-sm">
      <action-button
        text="Clear filters"
        type="secondary"
        @click="userStore.CLEAR_FILTERS"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "@/stores/user";

import ActionButton from "@/components/Shared/ActionButton.vue";

const userStore = useUserStore();
</script>
