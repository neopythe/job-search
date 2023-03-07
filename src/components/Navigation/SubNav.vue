<template>
  <div class="h-16 w-full border-b border-brand-gray-1 bg-white">
    <div v-if="onJobResultsPage" class="flex h-full items-center px-8">
      <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
      <span class="font-medium"
        ><span class="text-brand-green-1">1653</span> jobs matched</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SubNav",
  computed: {
    onJobResultsPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>
