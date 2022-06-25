<template>
  <Accordion header="Job types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
            :key="jobType"
            class="w-1/2 h-8"
          >
            <input
              :id="jobType"
              v-model="selectedJobTypes"
              :value="jobType"
              type="checkbox"
              class="mr-3"
              :data-test="jobType"
              @change="selectJobType"
            />
            <label :for="jobType" data-test="job-type">{{ jobType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </Accordion>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { useUniqueJobTypes } from '@/store/composables'
import { ADD_SELECTED_JOB_TYPES } from '@/store/constants'

import Accordion from '@/components/Shared/Accordion.vue'

export default {
  name: 'JobFiltersSidebarJobTypes',
  components: {
    Accordion,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const selectedJobTypes = ref([])
    const uniqueJobTypes = useUniqueJobTypes()

    const selectJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value)
      router.push({ name: 'JobResults' })
    }

    return { selectJobType, selectedJobTypes, uniqueJobTypes }
  },
}
</script>
