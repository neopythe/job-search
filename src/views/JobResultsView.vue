<template>
  <div class="flex flex-row flex-nowrap w-full">
    <JobFiltersSidebar />
    <JobListings />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobResults/JobListings.vue'

export default defineComponent({
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar,
    JobListings,
  },
})
</script>
