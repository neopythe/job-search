import { mount } from '@vue/test-utils'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'

describe('JobFiltersSidebarOrganizations', () => {
  const createConfig = $store => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        FontAwesomeIcon: true,
      },
    },
  })

  it('renders unique list of organizations for filtering jobs', async () => {
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(['Gaggle', 'MikeRoweSoft']),
      },
    }
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig($store))
    const clickableArea = wrapper.find('[data-test="clickable-area"]')
    await clickableArea.trigger('click')
    const organizationLabels = wrapper.findAll('[data-test="organization"]')
    const organizations = organizationLabels.map(node => node.text())
    expect(organizations).toEqual(['Gaggle', 'MikeRoweSoft'])
  })

  it('communicates that user has selected checkbox for organization', async () => {
    const commit = jest.fn()
    const $store = {
      getters: {
        UNIQUE_ORGANIZATIONS: new Set(['Gaggle', 'MikeRoweSoft']),
      },
      commit,
    }
    const wrapper = mount(JobFiltersSidebarOrganizations, createConfig($store))
    const clickableArea = wrapper.find('[data-test="clickable-area"]')
    await clickableArea.trigger('click')
    const gaggleInput = wrapper.find('[data-test="Gaggle"]')
    await gaggleInput.setChecked()
    expect(commit).toHaveBeenCalledWith('ADD_SELECTED_ORGANIZATIONS', [
      'Gaggle',
    ])
  })
})
