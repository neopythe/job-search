import { createStore } from 'vuex'

export const LOGIN_USER = 'LOGIN_USER'
export const RECEIVE_JOBS = 'RECEIVE_JOBS'

export const state = () => {
  return {
    isLoggedIn: false,
    jobs: [],
  }
}

export const mutations = {
  [LOGIN_USER](state) {
    state.isLoggedIn = true
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs
  },
}

const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== 'production',
})

export default store
