<template>
  <div>
    <job-filters-sidebar />
  </div>
</template>

<script>
import JobFiltersSidebar from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue";

export default {
  name: "JobResultsView",
  components: {
    JobFiltersSidebar,
  },
};
</script>
