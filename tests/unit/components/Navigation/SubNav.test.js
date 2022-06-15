import { mount } from '@vue/test-utils'

import SubNav from '@/components/Navigation/SubNav.vue'

describe('SubNav', () => {
  describe('when the user is on the jobs page', () => {
    it('displays job count', () => {
      const $route = {
        name: 'JobResults',
      }

      const wrapper = mount(SubNav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(true)
    })
  })

  describe('when the user is not on the jobs page', () => {
    it('does not display job count', () => {
      const $route = {
        name: 'Home',
      }

      const wrapper = mount(SubNav, {
        global: {
          mocks: {
            $route,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
