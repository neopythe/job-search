import { shallowMount } from '@vue/test-utils'

import { useRoute } from 'vue-router'
jest.mock('vue-router')
const useRouteMock = useRoute as jest.Mock

import { useStore } from 'vuex'
jest.mock('vuex')
const useStoreMock = useStore as jest.Mock

import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

describe('JobFiltersSidebar', () => {
  it('sets up panel for user to filter jobs by one or more criteria', () => {
    useStoreMock.mockReturnValue({ commit: jest.fn() })
    useRouteMock.mockReturnValue({ query: {} })
    const wrapper = shallowMount(JobFiltersSidebar)

    expect(wrapper.exists()).toBe(true)
  })

  it('reads query params to filter initial jobs for user', () => {
    const commit = jest.fn()
    useStoreMock.mockReturnValue({ commit })
    useRouteMock.mockReturnValue({
      query: {
        role: 'Vue',
      },
    })
    shallowMount(JobFiltersSidebar)

    expect(commit).toHaveBeenCalledWith('UPDATE_SKILLS_SEARCH_TERM', 'Vue')
  })
})
