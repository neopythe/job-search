import { shallowMount } from '@vue/test-utils'

import { useUniqueJobTypes } from '@/store/composables'
jest.mock('@/store/composables')
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock

import JobFiltersSidebarJobTypes from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue'

describe('JobFiltersSidebarJobTypes', () => {
  it('allows user to filter jobs by job types', () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(['Full-time', 'Part-time']))
    const wrapper = shallowMount(JobFiltersSidebarJobTypes)
    const jobTypesFilter = wrapper.findComponent({
      name: 'JobFiltersSidebarCheckboxGroup',
    })
    const { mutation, uniqueValues } = jobTypesFilter.props()

    expect(mutation).toBe('ADD_SELECTED_JOB_TYPES')
    expect(uniqueValues).toEqual(new Set(['Full-time', 'Part-time']))
  })
})
