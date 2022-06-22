import { mount } from '@vue/test-utils'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
jest.mock('vuex')
jest.mock('vue-router')

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
      useRoute.mockReturnValue({
        name: 'JobResults',
      })
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
      useRoute.mockReturnValue({
        name: 'Home',
      })
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
