import { shallowMount, flushPromises } from '@vue/test-utils'
import axios from 'axios'
jest.mock('axios')

import JobListings from '@/components/JobResults/JobListings.vue'

describe('JobListings', () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: '5',
      ...queryParams,
    },
  })

  const createConfig = $route => ({
    global: {
      mocks: {
        $route,
      },
    },
  })

  it('fetches jobs', () => {
    axios.get.mockResolvedValue({ data: [] })
    const $route = createRoute()
    shallowMount(JobListings, createConfig($route))
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/jobs')
  })

  it('creates a job listing for a maximum of 10 jobs', async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) })
    const queryParams = { page: '1' }
    const $route = createRoute(queryParams)
    const wrapper = shallowMount(JobListings, createConfig($route))
    await flushPromises()
    const jobListings = wrapper.findAll('[data-test="job-listing"]')
    expect(jobListings).toHaveLength(10)
  })
})
