import { mount } from '@vue/test-utils'
import { useStore } from 'vuex'
jest.mock('vuex')

import useConfirmRoute from '@/composables/useConfirmRoute'
jest.mock('@/composables/useConfirmRoute')

import SubNav from '@/components/Navigation/SubNav.vue'

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
      useConfirmRoute.mockReturnValue(true)
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }, { id: 2 }],
        },
      })
      const wrapper = mount(SubNav, createConfig())
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.text()).toMatch('2 jobs matched')
    })
  })

  describe('when the user is not on the jobs page', () => {
    it('does not display job count', () => {
      useConfirmRoute.mockReturnValue(false)
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [],
        },
      })
      const wrapper = mount(SubNav, createConfig())
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
