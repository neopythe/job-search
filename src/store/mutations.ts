import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
  LOGIN_USER,
  RECEIVE_DEGREES,
  RECEIVE_JOBS,
} from '@/store/constants'

import { GlobalState } from '@/store/types'
import { Degree, Job } from '@/api/types'

const mutations = {
  [ADD_SELECTED_JOB_TYPES](state: GlobalState, jobTypes: string[]) {
    state.selectedJobTypes = jobTypes
  },
  [ADD_SELECTED_ORGANIZATIONS](state: GlobalState, organizations: string[]) {
    state.selectedOrganizations = organizations
  },
  [LOGIN_USER](state: GlobalState) {
    state.isLoggedIn = true
  },
  [RECEIVE_DEGREES](state: GlobalState, degrees: Degree[]) {
    state.degrees = degrees
  },
  [RECEIVE_JOBS](state: GlobalState, jobs: Job[]) {
    state.jobs = jobs
  },
}

export default mutations
