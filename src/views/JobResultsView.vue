<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'

export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
    JobListings,
  },
}
</script>
