import getters from '@/store/getters'

import { createDegree, createJob, createState } from './utils'

describe('getters', () => {
  describe('FILTERED_JOBS', () => {
    it('filters jobs by degree, job type, and organization', () => {
      const INCLUDE_JOB_BY_DEGREE = jest.fn().mockReturnValue(true)
      const INCLUDE_JOB_BY_JOB_TYPE = jest.fn().mockReturnValue(true)
      const INCLUDE_JOB_BY_ORGANIZATION = jest.fn().mockReturnValue(true)
      const mockGetters = {
        INCLUDE_JOB_BY_DEGREE,
        INCLUDE_JOB_BY_JOB_TYPE,
        INCLUDE_JOB_BY_ORGANIZATION,
      }

      const job = createJob({ title: 'Best job ever' })
      const state = createState({
        jobs: [job],
      })

      const result = getters.FILTERED_JOBS(state, mockGetters)

      expect(result).toEqual([job])
      expect(INCLUDE_JOB_BY_DEGREE).toHaveBeenCalledWith(job)
      expect(INCLUDE_JOB_BY_JOB_TYPE).toHaveBeenCalledWith(job)
      expect(INCLUDE_JOB_BY_ORGANIZATION).toHaveBeenCalledWith(job)
    })
  })

  describe('INCLUDE_JOB_BY_DEGREE', () => {
    describe('when the user has not selected any degrees', () => {
      it('includes job', () => {
        const state = createState({
          selectedDegrees: [],
        })
        const job = createJob({ degree: 'Associate' })
        const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job)

        expect(includeJob).toBe(true)
      })
    })

    it('identifies whether job is associated with given degrees', () => {
      const state = createState({
        selectedDegrees: ["Bachelor's", 'Associate'],
      })
      const job = createJob({ degree: 'Associate' })
      const includeJob = getters.INCLUDE_JOB_BY_DEGREE(state)(job)

      expect(includeJob).toBe(true)
    })
  })

  describe('INCLUDE_JOB_BY_JOB_TYPE', () => {
    describe('when the user has not selected any job types', () => {
      it('includes job', () => {
        const state = createState({
          selectedJobTypes: [],
        })
        const job = createJob({ jobType: 'Full-time' })
        const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job)

        expect(includeJob).toBe(true)
      })
    })

    it('identifies whether job is associated with given job types', () => {
      const state = createState({
        selectedJobTypes: ['Full-time', 'Part-time'],
      })
      const job = createJob({ jobType: 'Part-time' })
      const includeJob = getters.INCLUDE_JOB_BY_JOB_TYPE(state)(job)

      expect(includeJob).toBe(true)
    })
  })

  describe('INCLUDE_JOB_BY_ORGANIZATION', () => {
    describe('when the user has not selected any organizations', () => {
      it('includes job', () => {
        const state = createState({
          selectedOrganizations: [],
        })
        const job = createJob({ organization: 'Gaggle' })
        const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job)

        expect(includeJob).toBe(true)
      })
    })

    it('identifies whether job is associated with given organizations', () => {
      const state = createState({
        selectedOrganizations: ['Gaggle', 'MikeRoweSoft'],
      })
      const job = createJob({ organization: 'Gaggle' })
      const includeJob = getters.INCLUDE_JOB_BY_ORGANIZATION(state)(job)

      expect(includeJob).toBe(true)
    })
  })

  describe('INCLUDE_JOB_BY_SKILL', () => {
    describe('when the user has not entered any skill', () => {
      it('includes job', () => {
        const state = createState({ skillsSearchTerm: '' })
        const job = createJob({ title: 'Vue Developer' })
        const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job)

        expect(includeJob).toBe(true)
      })
    })

    it("identifies whether job matches user's skill", () => {
      const state = createState({ skillsSearchTerm: 'Vue' })
      const job = createJob({ title: 'Vue Developer' })
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job)

      expect(includeJob).toBe(true)
    })

    it('handles inconsistent character casing', () => {
      const state = createState({ skillsSearchTerm: 'vuE' })
      const job = createJob({ title: 'Vue Developer' })
      const includeJob = getters.INCLUDE_JOB_BY_SKILL(state)(job)

      expect(includeJob).toBe(true)
    })
  })

  describe('UNIQUE_DEGREES', () => {
    it('extracts unique degree values', () => {
      const degrees = [
        createDegree({ degree: "Master's" }),
        createDegree({ degree: "Bachelor's" }),
      ]
      const state = createState({ degrees })
      const result = getters.UNIQUE_DEGREES(state)

      expect(result).toEqual(["Master's", "Bachelor's"])
    })
  })

  describe('UNIQUE_JOB_TYPES', () => {
    it('finds unique job types from list of jobs', () => {
      const jobs = [
        createJob({ jobType: 'Full-time' }),
        createJob({ jobType: 'Temporary' }),
        createJob({ jobType: 'Full-time' }),
      ]
      const state = createState({ jobs })
      const result = getters.UNIQUE_JOB_TYPES(state)

      expect(result).toEqual(new Set(['Full-time', 'Temporary']))
    })
  })

  describe('UNIQUE_ORGANIZATIONS', () => {
    it('finds unique organizations from list of jobs', () => {
      const jobs = [
        createJob({ organization: 'Gaggle' }),
        createJob({ organization: 'MikeRoweSoft' }),
        createJob({ organization: 'Gaggle' }),
      ]
      const state = createState({ jobs })
      const result = getters.UNIQUE_ORGANIZATIONS(state)

      expect(result).toEqual(new Set(['Gaggle', 'MikeRoweSoft']))
    })
  })
})
