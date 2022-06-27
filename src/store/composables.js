import { computed } from 'vue'
import { useStore } from 'vuex'

import {
  FETCH_JOBS,
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from '@/store/constants'

// getters

export const useFilteredJobs = () => {
  const store = useStore()
  return computed(() => store.getters[FILTERED_JOBS])
}

export const useUniqueJobTypes = () => {
  const store = useStore()
  return computed(() => store.getters[UNIQUE_JOB_TYPES])
}

export const useUniqueOrganizations = () => {
  const store = useStore()
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS])
}

// actions

export const useFetchJobsDispatch = () => {
  const store = useStore()
  store.dispatch(FETCH_JOBS)
}
