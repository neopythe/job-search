import { mount } from '@vue/test-utils'
import { useStore } from 'vuex'
jest.mock('vuex')

import { useRouter } from 'vue-router'
jest.mock('vue-router')

import { useUniqueOrganizations } from '@/store/composables'
jest.mock('@/store/composables')

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'

describe('JobFiltersSidebarOrganizations', () => {
  const createConfig = () => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  })

  it('renders unique list of organizations for filtering jobs', async () => {
    useUniqueOrganizations.mockReturnValue(new Set(['Gaggle', 'MikeRoweSoft']))
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig())
    const clickableArea = wrapper.find('[data-test="clickable-area"]')
    await clickableArea.trigger('click')
    const organizationLabels = wrapper.findAll('[data-test="organization"]')
    const organizations = organizationLabels.map(node => node.text())

    expect(organizations).toEqual(['Gaggle', 'MikeRoweSoft'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for organization', async () => {
      useUniqueOrganizations.mockReturnValue(
        new Set(['Gaggle', 'MikeRoweSoft'])
      )
      const commit = jest.fn()
      useStore.mockReturnValue({ commit })
      useRouter.mockReturnValue({ push: jest.fn() })
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig())
      const clickableArea = wrapper.find('[data-test="clickable-area"]')
      await clickableArea.trigger('click')
      const gaggleInput = wrapper.find('[data-test="Gaggle"]')
      await gaggleInput.setChecked()

      expect(commit).toHaveBeenCalledWith('ADD_SELECTED_ORGANIZATIONS', [
        'Gaggle',
      ])
    })

    it('navigates user to job results page to see fresh batch of filtered jobs', async () => {
      useUniqueOrganizations.mockReturnValue(
        new Set(['Gaggle', 'MikeRoweSoft'])
      )
      useStore.mockReturnValue({ commit: jest.fn() })
      const push = jest.fn()
      useRouter.mockReturnValue({ push })
      const wrapper = mount(JobFiltersSidebarOrganizations, createConfig())
      const clickableArea = wrapper.find('[data-test="clickable-area"]')
      await clickableArea.trigger('click')
      const gaggleInput = wrapper.find('[data-test="Gaggle"]')
      await gaggleInput.setChecked()

      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
