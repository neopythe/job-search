import { mount } from '@vue/test-utils'

import SubNav from '@/components/SubNav.vue'

describe('SubNav', () => {
  describe('when the user is on the jobs page', () => {
    it('displays job count', () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          }
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(true)
    })
  })

  describe('when the user is not on the jobs page', () => {
    it('does not display job count', () => {
      const wrapper = mount(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          }
        },
      })
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
