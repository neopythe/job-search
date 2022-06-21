import { createStore } from 'vuex'

import getJobs from '@/api/getJobs'

export const UNIQUE_ORGANIZATIONS = 'UNIQUE_ORGANIZATIONS'
export const FILTERED_JOBS_BY_ORGANIZATIONS = 'FILTERED_JOBS_BY_ORGANIZATIONS'

export const LOGIN_USER = 'LOGIN_USER'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'
export const ADD_SELECTED_ORGANIZATIONS = 'ADD_SELECTED_ORGANIZATIONS'

export const FETCH_JOBS = 'FETCH_JOBS'

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
    selectedOrganizations: [],
  }
}

export const getters = {
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set()
    state.jobs.forEach(job => uniqueOrganizations.add(job.organization))
    return uniqueOrganizations
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) {
      return state.jobs
    }
    return state.jobs.filter(job =>
      state.selectedOrganizations.includes(job.organization)
    )
  },
}

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs
  },
  [ADD_SELECTED_ORGANIZATIONS](state, organizations) {
    state.selectedOrganizations = organizations
  },
}

export const actions = {
  [FETCH_JOBS]: async context => {
    const jobListings = await getJobs()
    context.commit(RECEIVE_JOBS, jobListings)
  },
}

const store = createStore({
  state,
  getters,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== 'production',
})

export default store
