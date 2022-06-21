import mutations from '@/store/mutations'

describe('mutations', () => {
  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates job types that the user has chosen to filter jobs by', () => {
      const state = { selectedJobTypes: [] }
      mutations.ADD_SELECTED_JOB_TYPES(state, ['Full-time', 'Part-time'])
      expect(state).toEqual({
        selectedJobTypes: ['Full-time', 'Part-time'],
      })
    })
  })

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations that the user has chosen to filter jobs by', () => {
      const state = { selectedOrganizations: [] }
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ['Org 1', 'Org 2'])
      expect(state).toEqual({
        selectedOrganizations: ['Org 1', 'Org 2'],
      })
    })
  })

  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      const state = { isLoggedIn: false }
      mutations.LOGIN_USER(state)
      expect(state).toEqual({ isLoggedIn: true })
    })
  })

  describe('RECEIVE_JOBS', () => {
    it('receives jobs from API response', () => {
      const state = { jobs: [] }
      mutations.RECEIVE_JOBS(state, ['Job 1', 'Job 2'])
      expect(state).toEqual({ jobs: ['Job 1', 'Job 2'] })
    })
  })
})
