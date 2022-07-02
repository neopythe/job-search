<template>
  <JobFiltersSidebarCheckboxGroup
    :mutation="ADD_SELECTED_JOB_TYPES"
    :unique-values="uniqueJobTypes"
    data-test="job-types-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useUniqueJobTypes } from '@/store/composables'
import { ADD_SELECTED_JOB_TYPES } from '@/store/constants'

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

export default defineComponent({
  name: 'JobFiltersSidebarJobTypes',
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobTypes()

    return {
      ADD_SELECTED_JOB_TYPES,
      uniqueJobTypes,
    }
  },
})
</script>
