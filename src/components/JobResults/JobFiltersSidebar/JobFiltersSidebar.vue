<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <ActionButton text="Clear filters" type="sidebar" />
        </div>
      </div>
      <JobFiltersSidebarCheckboxGroup
        header="Degree"
        :mutation="ADD_SELECTED_DEGREES"
        :unique-values="uniqueDegrees"
        data-test="degrees-filter"
      />
      <JobFiltersSidebarCheckboxGroup
        header="Job types"
        :mutation="ADD_SELECTED_JOB_TYPES"
        :unique-values="uniqueJobTypes"
        data-test="job-types-filter"
      />
      <JobFiltersSidebarCheckboxGroup
        header="Organizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
        :unique-values="uniqueOrganizations"
        data-test="organizations-filter"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import ActionButton from '@/components/Shared/ActionButton.vue'
import JobFiltersSidebarCheckboxGroup from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue'

import {
  useUniqueDegrees,
  useUniqueJobTypes,
  useUniqueOrganizations,
} from '@/store/composables'
import {
  ADD_SELECTED_DEGREES,
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from '@/store/constants'

export default defineComponent({
  name: 'JobFiltersSidebar',
  components: {
    ActionButton,
    JobFiltersSidebarCheckboxGroup,
  },
  setup() {
    const uniqueDegrees = useUniqueDegrees()
    const uniqueJobTypes = useUniqueJobTypes()
    const uniqueOrganizations = useUniqueOrganizations()

    return {
      ADD_SELECTED_DEGREES,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
      uniqueDegrees,
      uniqueJobTypes,
      uniqueOrganizations,
    }
  },
})
</script>
