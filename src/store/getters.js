import {
  FILTERED_JOBS_BY_ORGANIZATIONS,
  UNIQUE_ORGANIZATIONS,
} from '@/store/constants'

const getters = {
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs
    }
    return state.jobs.filter(job =>
      state.selectedOrganizations.includes(job.organization)
    )
  },
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set()
    state.jobs.forEach(job => uniqueOrganizations.add(job.organization))
    return uniqueOrganizations
  },
}

export default getters
