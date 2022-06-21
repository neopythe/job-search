import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  RECEIVE_JOBS,
} from '@/store/constants'

const mutations = {
  [ADD_SELECTED_JOB_TYPES](state, jobTypes) {
    state.selectedJobTypes = jobTypes
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations
  },
  [LOGIN_USER](state) {
    state.isLoggedIn = true
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs
  },
}

export default mutations
