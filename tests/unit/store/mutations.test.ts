import mutations from '@/store/mutations'

import { createDegree, createJob, createState } from './utils'

describe('mutations', () => {
  describe('ADD_SELECTED_DEGREES', () => {
    it('keeps track of which degrees the user has chosen to filter jobs by', () => {
      const state = createState({ selectedDegrees: [] })
      mutations.ADD_SELECTED_DEGREES(state, ["Master's", "Bachelor's"])

      expect(state.selectedDegrees).toEqual(["Master's", "Bachelor's"])
    })
  })

  describe('ADD_SELECTED_JOB_TYPES', () => {
    it('updates job types that the user has chosen to filter jobs by', () => {
      const state = createState({ selectedJobTypes: [] })
      mutations.ADD_SELECTED_JOB_TYPES(state, ['Full-time', 'Part-time'])

      expect(state.selectedJobTypes).toEqual(['Full-time', 'Part-time'])
    })
  })

  describe('ADD_SELECTED_ORGANIZATIONS', () => {
    it('updates organizations that the user has chosen to filter jobs by', () => {
      const state = createState({ selectedOrganizations: [] })
      mutations.ADD_SELECTED_ORGANIZATIONS(state, ['Org 1', 'Org 2'])

      expect(state.selectedOrganizations).toEqual(['Org 1', 'Org 2'])
    })
  })

  describe('CLEAR_USER_JOB_FILTER_SELECTIONS', () => {
    it('removes all job filters that the user has chosen', () => {
      const state = createState({
        selectedDegrees: ['Associate'],
        selectedJobTypes: ['Full-time'],
        selectedOrganizations: ['Javazon'],
        skillsSearchTerm: 'Vue',
      })
      mutations.CLEAR_USER_JOB_FILTER_SELECTIONS(state)

      expect(state.selectedDegrees).toEqual([])
      expect(state.selectedJobTypes).toEqual([])
      expect(state.selectedOrganizations).toEqual([])
      expect(state.skillsSearchTerm).toBe('')
    })
  })

  describe('LOGIN_USER', () => {
    it('logs the user in', () => {
      const state = createState({ isLoggedIn: false })
      mutations.LOGIN_USER(state)

      expect(state.isLoggedIn).toBe(true)
    })
  })

  describe('RECEIVE_DEGREES', () => {
    it('receives degrees from API response', () => {
      const state = createState({ degrees: [] })
      const degree = createDegree()
      mutations.RECEIVE_DEGREES(state, [degree])

      expect(state.degrees).toEqual([degree])
    })
  })

  describe('RECEIVE_JOBS', () => {
    it('receives jobs from API response', () => {
      const state = createState({ jobs: [] })
      const jobOne = createJob()
      const jobTwo = createJob()
      mutations.RECEIVE_JOBS(state, [jobOne, jobTwo])

      expect(state.jobs).toEqual([jobOne, jobTwo])
    })
  })

  describe('UPDATE_SKILLS_SEARCH_TERM', () => {
    it("receives search term for user's skills", () => {
      const state = createState({ skillsSearchTerm: '' })
      mutations.UPDATE_SKILLS_SEARCH_TERM(state, 'Vue')

      expect(state.skillsSearchTerm).toBe('Vue')
    })
  })
})
