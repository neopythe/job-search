import { mount } from '@vue/test-utils'

import SubNav from '@/components/Navigation/SubNav.vue'

describe('SubNav', () => {
  const createConfig = (routeName, $store = {}) => ({
    global: {
      mocks: {
        $route: { name: routeName },
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  })

  describe('when the user is on the jobs page', () => {
    it('displays job count', () => {
      const routeName = 'JobResults'
      const $store = {
        getters: {
          FILTERED_JOBS_BY_ORGANIZATIONS: [{ id: 1 }, { id: 2 }],
        },
      }
      const wrapper = mount(SubNav, createConfig(routeName, $store))
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.text()).toMatch('2 jobs matched')
    })
  })

  describe('when the user is not on the jobs page', () => {
    it('does not display job count', () => {
      const routeName = 'Home'
      const wrapper = mount(SubNav, createConfig(routeName))
      const jobCount = wrapper.find('[data-test="job-count"]')
      expect(jobCount.exists()).toBe(false)
    })
  })
})
