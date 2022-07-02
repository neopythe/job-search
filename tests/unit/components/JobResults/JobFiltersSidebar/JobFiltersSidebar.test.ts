import { shallowMount } from '@vue/test-utils'
jest.mock('vuex')

import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

describe('JobFiltersSidebar', () => {
  it('sets up panel for user to filter jobs by one or more criteria', () => {
    const wrapper = shallowMount(JobFiltersSidebar)

    expect(wrapper.exists()).toBe(true)
  })
})
