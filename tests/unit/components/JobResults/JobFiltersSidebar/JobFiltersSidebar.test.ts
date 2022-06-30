import { shallowMount } from '@vue/test-utils'

import {
  useUniqueDegrees,
  useUniqueJobTypes,
  useUniqueOrganizations,
} from '@/store/composables'
jest.mock('@/store/composables')
const useUniqueDegreesMock = useUniqueDegrees as jest.Mock
const useUniqueJobTypesMock = useUniqueJobTypes as jest.Mock
const useUniqueOrganizationsMock = useUniqueOrganizations as jest.Mock

import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

describe('JobFiltersSidebar', () => {
  it('allows user to filter jobs by degrees', () => {
    useUniqueDegreesMock.mockReturnValue(['Associate', "Bachelor's"])
    useUniqueJobTypesMock.mockReturnValue(new Set(['Full-time', 'Part-time']))
    useUniqueOrganizationsMock.mockReturnValue(new Set(['Javazon']))
    const wrapper = shallowMount(JobFiltersSidebar)
    const degreesFilter = wrapper.findComponent<HTMLElement>(
      '[data-test="degrees-filter"]'
    )
    const { header, mutation, uniqueValues } = degreesFilter.props()

    expect(header).toBe('Degree')
    expect(mutation).toBe('ADD_SELECTED_DEGREES')
    expect(uniqueValues).toEqual(['Associate', "Bachelor's"])
  })

  it('allows user to filter jobs by job types', () => {
    useUniqueDegreesMock.mockReturnValue(['Associate', "Bachelor's"])
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
    useUniqueDegreesMock.mockReturnValue(['Associate', "Bachelor's"])
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
