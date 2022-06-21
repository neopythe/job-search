import getters from '@/store/getters'

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

  describe('FILTERED_JOBS_BY_ORGANIZATIONS', () => {
    it('identifies jobs that are associated with the given organizations', () => {
      const state = {
        jobs: [
          { organization: 'Gaggle' },
          { organization: 'Javazon' },
          { organization: 'MikeRoweSoft' },
        ],
        selectedOrganizations: ['Gaggle', 'MikeRoweSoft'],
      }
      const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state)
      expect(filteredJobs).toEqual([
        { organization: 'Gaggle' },
        { organization: 'MikeRoweSoft' },
      ])
    })

    describe('when the user has not selected any organizations', () => {
      it('returns all jobs', () => {
        const state = {
          jobs: [
            { organization: 'Gaggle' },
            { organization: 'Javazon' },
            { organization: 'MikeRoweSoft' },
          ],
          selectedOrganizations: [],
        }
        const filteredJobs = getters.FILTERED_JOBS_BY_ORGANIZATIONS(state)
        expect(filteredJobs).toEqual([
          { organization: 'Gaggle' },
          { organization: 'Javazon' },
          { organization: 'MikeRoweSoft' },
        ])
      })
    })
  })
})
