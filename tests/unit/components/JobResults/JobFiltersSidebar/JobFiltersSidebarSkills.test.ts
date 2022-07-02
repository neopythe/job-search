import { shallowMount } from '@vue/test-utils'

import { useStore } from 'vuex'
jest.mock('vuex')
const useStoreMock = useStore as jest.Mock

import JobFiltersSidebarSkills from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarSkills.vue'

describe('JobFiltersSidebarSkills', () => {
  it('populates search input from store', () => {
    useStoreMock.mockReturnValue({
      state: {
        skillsSearchTerm: 'Programmer',
      },
      commit: jest.fn(),
    })
    const wrapper = shallowMount(JobFiltersSidebarSkills)
    const skillsSearchInput = wrapper.find('[data-test="skills-search-input"]')
    const inputElement = skillsSearchInput.element as HTMLInputElement

    expect(inputElement.value).toBe('Programmer')
  })
})
