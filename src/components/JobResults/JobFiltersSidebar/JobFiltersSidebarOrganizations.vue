<template>
  <JobFiltersSidebarCheckboxGroup
    :mutation="ADD_SELECTED_ORGANIZATIONS"
    :unique-values="uniqueOrganizations"
    data-test="organizations-filter"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useUniqueOrganizations } from '@/store/composables'
import { ADD_SELECTED_ORGANIZATIONS } from '@/store/constants'

import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

export default defineComponent({
  name: 'JobFiltersSidebarOrganizations',
  components: {
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueOrganizations = useUniqueOrganizations()

    return {
      ADD_SELECTED_ORGANIZATIONS,
      uniqueOrganizations,
    }
  },
})
</script>
