import { mount } from '@vue/test-utils'

import JobFiltersSidebarOrganizations from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue'

describe('JobFiltersSidebarOrganizations', () => {
  const createConfig = ($store, $router) => ({
    global: {
      mocks: {
        $router,
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
    const $router = { push: jest.fn() }
    const wrapper = mount(
      JobFiltersSidebarOrganizations,
      createConfig($store, $router)
    )
    const clickableArea = wrapper.find('[data-test="clickable-area"]')
    await clickableArea.trigger('click')
    const organizationLabels = wrapper.findAll('[data-test="organization"]')
    const organizations = organizationLabels.map(node => node.text())
    expect(organizations).toEqual(['Gaggle', 'MikeRoweSoft'])
  })

  describe('when user clicks checkbox', () => {
    it('communicates that user has selected checkbox for organization', async () => {
      const commit = jest.fn()
      const $store = {
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(['Gaggle', 'MikeRoweSoft']),
        },
        commit,
      }
      const $router = { push: jest.fn() }
      const wrapper = mount(
        JobFiltersSidebarOrganizations,
        createConfig($store, $router)
      )
      const clickableArea = wrapper.find('[data-test="clickable-area"]')
      await clickableArea.trigger('click')
      const gaggleInput = wrapper.find('[data-test="Gaggle"]')
      await gaggleInput.setChecked()
      expect(commit).toHaveBeenCalledWith('ADD_SELECTED_ORGANIZATIONS', [
        'Gaggle',
      ])
    })

    it('navigates user to job results page to see fresh batch of filtered jobs', async () => {
      const $store = {
        getters: {
          UNIQUE_ORGANIZATIONS: new Set(['Gaggle', 'MikeRoweSoft']),
        },
        commit: jest.fn(),
      }
      const push = jest.fn()
      const $router = { push }
      const wrapper = mount(
        JobFiltersSidebarOrganizations,
        createConfig($store, $router)
      )
      const clickableArea = wrapper.find('[data-test="clickable-area"]')
      await clickableArea.trigger('click')
      const gaggleInput = wrapper.find('[data-test="Gaggle"]')
      await gaggleInput.setChecked()
      expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
    })
  })
})
