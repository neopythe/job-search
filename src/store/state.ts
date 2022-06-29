import { GlobalState } from '@/store/types'

const state = (): GlobalState => {
  return {
    isLoggedIn: false,
    jobs: [],
    degrees: [],
    selectedDegrees: [],
    selectedJobTypes: [],
    selectedOrganizations: [],
  }
}

export default state
