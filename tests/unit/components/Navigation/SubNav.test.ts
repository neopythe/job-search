import { mount } from '@vue/test-utils'

import { useFilteredJobs } from '@/store/composables'
jest.mock('@/store/composables')

import useConfirmRoute from '@/composables/useConfirmRoute'
jest.mock('@/composables/useConfirmRoute')

import SubNav from '@/components/Navigation/SubNav.vue'

const useConfirmRouteMock = useConfirmRoute as jest.Mock
const useFilteredJobsMock = useFilteredJobs as jest.Mock

describe('SubNav', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  })

  describe('when the user is on the jobs page', () => {
    it('displays job count', () => {
      useConfirmRouteMock.mockReturnValue(true)
      useFilteredJobsMock.mockReturnValue([{ id: 1 }, { id: 2 }])
      const wrapper = mount(SubNav, createConfig())
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.text()).toMatch('2 jobs matched')
    })
  })

  describe('when the user is not on the jobs page', () => {
    it('does not display job count', () => {
      useConfirmRouteMock.mockReturnValue(false)
      useFilteredJobsMock.mockReturnValue([])
      const wrapper = mount(SubNav, createConfig())
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
