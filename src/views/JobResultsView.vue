<template>
  <div>
    <JobFiltersSidebar />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
  },
}
</script>
