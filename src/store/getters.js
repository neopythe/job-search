import {
  FILTERED_JOBS,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from '@/store/constants'

const getters = {
  [FILTERED_JOBS](state, getters) {
    return state.jobs
      .filter(job => getters.INCLUDE_JOB_BY_JOB_TYPE(job))
      .filter(job => getters.INCLUDE_JOB_BY_ORGANIZATION(job))
  },
  [INCLUDE_JOB_BY_JOB_TYPE]: state => job => {
    if (state.selectedJobTypes.length === 0) return true
    return state.selectedJobTypes.includes(job.jobType)
  },
  [INCLUDE_JOB_BY_ORGANIZATION]: state => job => {
    if (state.selectedOrganizations.length === 0) return true
    return state.selectedOrganizations.includes(job.organization)
  },
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobTypes = new Set()
    state.jobs.forEach(job => uniqueJobTypes.add(job.jobType))
    return uniqueJobTypes
  },
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set()
    state.jobs.forEach(job => uniqueOrganizations.add(job.organization))
    return uniqueOrganizations
  },
}

export default getters
