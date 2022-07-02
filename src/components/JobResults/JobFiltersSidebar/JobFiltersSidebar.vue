<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <JobFiltersSidebarPrompt />
      <Accordion header="Skills & qualifications">
        <JobFiltersSidebarSkills />
      </Accordion>
      <Accordion header="Degree">
        <JobFiltersSidebarDegrees />
      </Accordion>
      <Accordion header="Job types">
        <JobFiltersSidebarJobTypes />
      </Accordion>
      <Accordion header="Organizations">
        <JobFiltersSidebarOrganizations />
      </Accordion>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import { key } from '@/store'

import { UPDATE_SKILLS_SEARCH_TERM } from '@/store/constants'

import Accordion from '@/components/Shared/Accordion.vue'

import JobFiltersSidebarDegrees from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarDegrees.vue'
import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue'
import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'
import JobFiltersSidebarPrompt from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarPrompt.vue'
import JobFiltersSidebarSkills from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue'

export default defineComponent({
  name: 'JobFiltersSidebar',
  components: {
    Accordion,
    JobFiltersSidebarDegrees,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarPrompt,
    JobFiltersSidebarSkills,
  },
  setup() {
    const parseSkillsSearchTerm = () => {
      const route = useRoute()
      const store = useStore(key)

      const role = route.query.role || ''

      store.commit(UPDATE_SKILLS_SEARCH_TERM, role)
    }

    onMounted(parseSkillsSearchTerm)
  },
})
</script>
