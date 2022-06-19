import { actions, getters, mutations, state } from '@/store'
import getJobs from '@/api/getJobs'
jest.mock('@/api/getJobs')

describe('state', () => {
  it('keeps track of whether user is logged in', () => {
    const startingState = state()
    expect(startingState.isLoggedIn).toBe(false)
  })

  it('stores job listings', () => {
    const startingState = state()
    expect(startingState.jobs).toEqual([])
  })
})

describe('mutations', () => {
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

describe('getters', () => {
  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const state = {
        jobs: [
          { organization: 'Gaggle' },
          { organization: 'MikeRoweSoft' },
          { organization: 'Gaggle' },
        ],
      }
      const result = getters.UNIQUE_ORGANIZATIONS(state)
      expect(result).toEqual(new Set(['Gaggle', 'MikeRoweSoft']))
    })
  })
})

describe('actions', () => {
  describe('FETCH_JOBS', () => {
    beforeEach(() => {
      getJobs.mockResolvedValue([
        {
          id: 1,
          title: 'Software Developer',
        },
      ])
    })

    it('makes a request to fetch jobs', async () => {
      const context = {
        commit: jest.fn(),
      }
      await actions.FETCH_JOBS(context)
      expect(getJobs).toHaveBeenCalled()
    })

    it('sends message to save received jobs in store', async () => {
      const commit = jest.fn()
      const context = { commit }
      await actions.FETCH_JOBS(context)
      expect(commit).toHaveBeenCalledWith('RECEIVE_JOBS', [
        {
          id: 1,
          title: 'Software Developer',
        },
      ])
    })
  })
})
