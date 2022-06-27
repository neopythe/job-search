import { useStore } from 'vuex'
jest.mock('vuex')

import {
  useFetchJobsDispatch,
  useFilteredJobs,
  useUniqueJobTypes,
  useUniqueOrganizations,
} from '@/store/composables'

describe('composables', () => {
  describe('useFetchJobsDispatch', () => {
    it('sends call to fetch jobs from API', () => {
      const dispatch = jest.fn()
      useStore.mockReturnValue({
        dispatch,
      })
      useFetchJobsDispatch()

      expect(dispatch).toHaveBeenCalledWith('FETCH_JOBS')
    })
  })

  describe('useFilteredJobs', () => {
    it('retrieves filtered jobs from store', () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      })
      const result = useFilteredJobs()

      expect(result.value).toEqual([{ id: 1 }])
    })
  })

  describe('useUniqueJobTypes', () => {
    it('retrieves unique job types from store', () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_JOB_TYPES: new Set(['Full-time']),
        },
      })
      const result = useUniqueJobTypes()

      expect(result.value).toEqual(new Set(['Full-time']))
    })
  })

  describe('useUniqueOrganizations', () => {
    it('retrieves unique job organizations from store', () => {
      useStore.mockReturnValue({
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(['Javazon']),
        },
      })
      const result = useUniqueOrganizations()

      expect(result.value).toEqual(new Set(['Javazon']))
    })
  })
})
