import { ref } from 'vue'
import { shallowMount, flushPromises, RouterLinkStub } from '@vue/test-utils'

import { useFetchJobsDispatch, useFilteredJobs } from '@/store/composables'
jest.mock('@/store/composables')

import useCurrentPage from '@/composables/useCurrentPage'
jest.mock('@/composables/useCurrentPage')

import usePreviousAndNextPages from '@/composables/usePreviousAndNextPages'
jest.mock('@/composables/usePreviousAndNextPages')

import JobListings from '@/components/JobResults/JobListings.vue'

describe('JobListings', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  })

  describe('when component mounts', () => {
    it('makes call to fetch jobs from API', () => {
      useFilteredJobs.mockReturnValue({ value: [] })
      useCurrentPage.mockReturnValue({ value: 2 })
      usePreviousAndNextPages.mockReturnValue({ previousPage: 1, nextPage: 3 })
      shallowMount(JobListings, createConfig())

      expect(useFetchJobsDispatch).toHaveBeenCalled()
    })
  })

  it('creates a job listing for a maximum of 10 jobs per page', async () => {
    useFilteredJobs.mockReturnValue({ value: Array(15).fill({}) })
    useCurrentPage.mockReturnValue({ value: 1 })
    usePreviousAndNextPages.mockReturnValue({ previousPage: null, nextPage: 2 })
    const wrapper = shallowMount(JobListings, createConfig())
    await flushPromises()
    const jobListings = wrapper.findAll('[data-test="job-listing"]')

    expect(jobListings).toHaveLength(10)
  })

  it('displays page number', () => {
    useFilteredJobs.mockReturnValue({ value: [] })
    useCurrentPage.mockReturnValue(ref(5))
    usePreviousAndNextPages.mockReturnValue({ previousPage: 4, nextPage: 6 })
    const wrapper = shallowMount(JobListings, createConfig())
    expect(wrapper.text()).toMatch('Page 5')
  })

  describe('when user is on first page of job results', () => {
    it('does not show link to previous page', async () => {
      useFilteredJobs.mockReturnValue({ value: [] })
      useCurrentPage.mockReturnValue(ref(1))
      usePreviousAndNextPages.mockReturnValue({
        previousPage: null,
        nextPage: 2,
      })
      const wrapper = shallowMount(JobListings, createConfig())
      await flushPromises()
      const previousPage = wrapper.find('[data-test="previous-page-link"]')
      expect(previousPage.exists()).toBe(false)
    })

    it('shows link to next page', async () => {
      useFilteredJobs.mockReturnValue({ value: [] })
      useCurrentPage.mockReturnValue(ref(1))
      usePreviousAndNextPages.mockReturnValue({
        previousPage: null,
        nextPage: 2,
      })
      const wrapper = shallowMount(JobListings, createConfig())
      await flushPromises()
      const nextPage = wrapper.find('[data-test="next-page-link"]')
      expect(nextPage.exists()).toBe(true)
    })
  })

  describe('when user is on last page of job results', () => {
    it('does not show link to next page', async () => {
      useFilteredJobs.mockReturnValue({ value: [] })
      useCurrentPage.mockReturnValue(ref(2))
      usePreviousAndNextPages.mockReturnValue({
        previousPage: 1,
        nextPage: null,
      })
      const wrapper = shallowMount(JobListings, createConfig())
      await flushPromises()
      const nextPage = wrapper.find('[data-test="next-page-link"]')
      expect(nextPage.exists()).toBe(false)
    })

    it('shows link to previous page', async () => {
      useFilteredJobs.mockReturnValue({ value: [] })
      useCurrentPage.mockReturnValue(ref(2))
      usePreviousAndNextPages.mockReturnValue({
        previousPage: 1,
        nextPage: null,
      })
      const wrapper = shallowMount(JobListings, createConfig())
      await flushPromises()
      const previousPage = wrapper.find('[data-test="previous-page-link"]')
      expect(previousPage.exists()).toBe(true)
    })
  })
})
