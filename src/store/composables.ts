import { computed } from 'vue'
import { useStore } from 'vuex'

import {
  FETCH_DEGREES,
  FETCH_JOBS,
  FILTERED_JOBS,
  UNIQUE_DEGREES,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from '@/store/constants'

import { Job } from '@/api/types'

import { key } from '@/store'

// getters

export const useFilteredJobs = () => {
  const store = useStore(key)
  return computed<Job[]>(() => store.getters[FILTERED_JOBS])
}

export const useUniqueDegrees = () => {
  const store = useStore(key)
  return computed<string[]>(() => store.getters[UNIQUE_DEGREES])
}

export const useUniqueJobTypes = () => {
  const store = useStore(key)
  return computed<Set<string>>(() => store.getters[UNIQUE_JOB_TYPES])
}

export const useUniqueOrganizations = () => {
  const store = useStore(key)
  return computed<Set<string>>(() => store.getters[UNIQUE_ORGANIZATIONS])
}

// actions

export const useFetchDegreesDispatch = () => {
  const store = useStore(key)
  store.dispatch(FETCH_DEGREES)
}

export const useFetchJobsDispatch = () => {
  const store = useStore(key)
  store.dispatch(FETCH_JOBS)
}
