import actions from '@/store/actions'

import getDegrees from '@/api/getDegrees'
jest.mock('@/api/getDegrees')
const getDegreesMock = getDegrees as jest.Mock

import getJobs from '@/api/getJobs'
jest.mock('@/api/getJobs')
const getJobsMock = getJobs as jest.Mock

describe('actions', () => {
  describe('FETCH_DEGREES', () => {
    beforeEach(() => {
      getDegreesMock.mockResolvedValue([
        {
          id: 1,
          degree: "Bachelor's",
        },
      ])
    })

    it('makes a request to fetch degrees', async () => {
      const context = {
        commit: jest.fn(),
      }
      await actions.FETCH_DEGREES(context)

      expect(getDegrees).toHaveBeenCalled()
    })

    it('sends message to save received degrees in store', async () => {
      const commit = jest.fn()
      const context = { commit }
      await actions.FETCH_DEGREES(context)

      expect(commit).toHaveBeenCalledWith('RECEIVE_DEGREES', [
        {
          id: 1,
          degree: "Bachelor's",
        },
      ])
    })
  })

  describe('FETCH_JOBS', () => {
    beforeEach(() => {
      getJobsMock.mockResolvedValue([
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
