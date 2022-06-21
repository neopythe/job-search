import {
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  RECEIVE_JOBS,
} from '@/store/constants'

const mutations = {
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
