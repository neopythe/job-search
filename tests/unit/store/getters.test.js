import getters from '@/store/getters'

describe('getters', () => {
  describe('FILTERED_JOBS_BY_JOB_TYPES', () => {
    it('identifies jobs that are associated with the given job types', () => {
      const state = {
        jobs: [
          { jobType: 'Full-time' },
          { jobType: 'Temporary' },
          { jobType: 'Part-time' },
        ],
        selectedJobTypes: ['Full-time', 'Part-time'],
      }
      const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state)
      expect(filteredJobs).toEqual([
        { jobType: 'Full-time' },
        { jobType: 'Part-time' },
      ])
    })

    describe('when the user has not selected any job types', () => {
      it('returns all jobs', () => {
        const state = {
          jobs: [
            { jobType: 'Full-time' },
            { jobType: 'Temporary' },
            { jobType: 'Part-time' },
          ],
          selectedJobTypes: [],
        }
        const filteredJobs = getters.FILTERED_JOBS_BY_JOB_TYPES(state)
        expect(filteredJobs).toEqual([
          { jobType: 'Full-time' },
          { jobType: 'Temporary' },
          { jobType: 'Part-time' },
        ])
      })
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

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const state = {
          selectedJobTypes: [],
        }
        const job = { jobType: 'Full-time' }
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job)
        expect(includeJob).toBe(true)
      })

      it('identifies if job is associated with given job types', () => {
        const state = {
          selectedJobTypes: ['Part-time', 'Part-time'],
        }
        const job = { jobType: 'Part-time' }
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job)
        expect(includeJob).toBe(true)
      })
    })
  })

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const state = {
          selectedOrganizations: [],
        }
        const job = { organization: 'Gaggle' }
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job)
        expect(includeJob).toBe(true)
      })

      it('identifies if job is associated with given organizations', () => {
        const state = {
          selectedOrganizations: ['Gaggle', 'MikeRoweSoft'],
        }
        const job = { organization: 'Gaggle' }
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job)
        expect(includeJob).toBe(true)
      })
    })
  })

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const state = {
        jobs: [
          { jobType: 'Full-time' },
          { jobType: 'Temporary' },
          { jobType: 'Full-time' },
        ],
      }
      const result = getters.UNIQUE_JOB_TYPES(state)
      expect(result).toEqual(new Set(['Full-time', 'Temporary']))
    })
  })

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
