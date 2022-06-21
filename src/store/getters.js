import {
  FILTERED_JOBS,
  FILTERED_JOBS_BY_JOB_TYPES,
  FILTERED_JOBS_BY_ORGANIZATIONS,
  INCLUDE_JOB_BY_JOB_TYPE,
  INCLUDE_JOB_BY_ORGANIZATION,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
} from '@/store/constants'

const getters = {
  [FILTERED_JOBS](state) {
    const noSelectedJobTypes = state.selectedJobTypes.length === 0
    const noSelectedOrganizations = state.selectedOrganizations.length === 0

    return state.jobs
      .filter(job => {
        if (noSelectedJobTypes) return true
        return state.selectedJobTypes.includes(job.jobType)
      })
      .filter(job => {
        if (noSelectedOrganizations) return true
        return state.selectedOrganizations.includes(job.organization)
      })
  },
  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) {
      return state.jobs
    }
    return state.jobs.filter(job =>
      state.selectedJobTypes.includes(job.jobType)
    )
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs
    }
    return state.jobs.filter(job =>
      state.selectedOrganizations.includes(job.organization)
    )
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
