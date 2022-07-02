<template>
  <JobFiltersSidebarCheckboxGroup
    :mutation="ADD_SELECTED_DEGREES"
    :unique-values="uniqueDegrees"
    data-test="degrees-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useUniqueDegrees } from '@/store/composables'
import { ADD_SELECTED_DEGREES } from '@/store/constants'

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

export default defineComponent({
  name: 'JobFiltersSidebarDegrees',
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees()

    return {
      ADD_SELECTED_DEGREES,
      uniqueDegrees,
    }
  },
})
</script>
