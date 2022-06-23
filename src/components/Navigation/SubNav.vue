<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1 font-semibold">{{
            FILTERED_JOBS.length
          }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

import useConfirmRoute from '@/composables/useConfirmRoute'

export default {
  name: 'SubNav',
  setup() {
    const store = useStore()
    const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS)

    const onJobResultsPage = useConfirmRoute('JobResults')

    return { FILTERED_JOBS, onJobResultsPage }
  },
}
</script>
