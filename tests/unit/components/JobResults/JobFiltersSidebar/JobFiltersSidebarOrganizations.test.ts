import { shallowMount } from '@vue/test-utils'

import { useUniqueOrganizations } from '@/store/composables'
jest.mock('@/store/composables')
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'

describe('JobFiltersSidebarOrganizations', () => {
  it('allows user to filter jobs by organizations', () => {
    useUniqueOrganizationsMock.mockReturnValue(new Set(['Javazon']))
    const wrapper = shallowMount(JobFiltersSidebarOrganizations)
    const organizationsFilter = wrapper.findComponent({
      name: 'JobFiltersSidebarCheckboxGroup',
    })
    const { mutation, uniqueValues } = organizationsFilter.props()
    expect(mutation).toBe('ADD_SELECTED_ORGANIZATIONS')
    expect(uniqueValues).toEqual(new Set(['Javazon']))
  })
})
