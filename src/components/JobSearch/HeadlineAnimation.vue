<template>
  <section class="mb-16">
    <h1 class="mb-12 text-8xl font-bold tracking-tighter">
      <span :class="actionClass">{{ action }}</span>
      <br />
      <span class="whitespace-nowrap">for everyone</span>
    </h1>
    <h2 class="whitespace-nowrap text-3xl">Find your next job at Gaggle.</h2>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, onBeforeUnmount, onMounted } from "vue";

import nextElementInList from "@/utils/nextElementInList";

const action = ref("Build");
const interval = ref<ReturnType<typeof setInterval>>();

const actionClass = computed(() => ({ [action.value.toLowerCase()]: true }));

const changeTitle = () => {
  interval.value = setInterval(() => {
    const actions = ["Build", "Create", "Design", "Code"];
    action.value = nextElementInList(actions, action.value);
  }, 5000);
};

onMounted(changeTitle);

onBeforeUnmount(() => clearInterval(interval.value));
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
