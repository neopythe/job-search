import { shallowMount } from '@vue/test-utils'

import { useUniqueJobTypes, useUniqueOrganizations } from '@/store/composables'
jest.mock('@/store/composables')
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock

import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

describe('JobFiltersSidebar', () => {
  it('allows user to filter jobs by job types', () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(['Full-time', 'Part-time']))
    useUniqueOrganizationsMock.mockReturnValue(new Set(['Javazon']))
    const wrapper = shallowMount(JobFiltersSidebar)
    const jobTypesFilter = wrapper.findComponent<HTMLElement>(
      '[data-test="job-types-filter"]'
    )
    const { header, mutation, uniqueValues } = jobTypesFilter.props()

    expect(header).toBe('Job types')
    expect(mutation).toBe('ADD_SELECTED_JOB_TYPES')
    expect(uniqueValues).toEqual(new Set(['Full-time', 'Part-time']))
  })

  it('allows user to filter jobs by organizations', () => {
    useUniqueJobTypesMock.mockReturnValue(new Set(['Full-time', 'Part-time']))
    useUniqueOrganizationsMock.mockReturnValue(new Set(['Javazon']))
    const wrapper = shallowMount(JobFiltersSidebar)
    const organizationsFilter = wrapper.findComponent<HTMLElement>(
      '[data-test="organizations-filter"]'
    )
    const { header, mutation, uniqueValues } = organizationsFilter.props()

    expect(header).toBe('Organizations')
    expect(mutation).toBe('ADD_SELECTED_ORGANIZATIONS')
    expect(uniqueValues).toEqual(new Set(['Javazon']))
  })
})
