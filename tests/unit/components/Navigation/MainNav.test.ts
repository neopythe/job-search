import { shallowMount, RouterLinkStub } from '@vue/test-utils'

import { GlobalState } from '@/store/types'

import MainNav from '@/components/Navigation/MainNav.vue'

interface MockStore {
  state: Partial<GlobalState>
}

describe('MainNav', () => {
  const createStore = (state = { isLoggedIn: false }) => {
    return {
      state,
      commit: jest.fn(),
    }
  }

  const createConfig = ($store: MockStore) => ({
    global: {
      mocks: {
        $store,
      },
      stubs: {
        'router-link': RouterLinkStub,
      },
    },
  })

  it('displays company name', () => {
    const $store = createStore()
    const wrapper = shallowMount(MainNav, createConfig($store))
    expect(wrapper.text()).toMatch('Gaggle Careers')
  })

  it('displays menu items for navigation', () => {
    const $store = createStore()
    const wrapper = shallowMount(MainNav, createConfig($store))
    const navigationMenuItems = wrapper.findAll(
      '[data-test="main-nav-list-item"]'
    )
    const navigationMenuTexts = navigationMenuItems.map(item => item.text())
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Benefits',
      'Jobs',
      'Students',
    ])
  })

  describe('when user is logged out', () => {
    it('prompts user to sign in', () => {
      const $store = createStore({ isLoggedIn: false })
      const wrapper = shallowMount(MainNav, createConfig($store))
      const loginButton = wrapper.find('[data-test="login-button"]')
      expect(loginButton.exists()).toBe(true)
    })

    it('issues call to Vuex to login user', async () => {
      const $store = createStore({ isLoggedIn: false })
      const wrapper = shallowMount(MainNav, createConfig($store))
      const loginButton = wrapper.find('[data-test="login-button"]')

      await loginButton.trigger('click')

      expect($store.commit).toHaveBeenCalledWith('LOGIN_USER')
    })
  })

  describe('when user is logged in', () => {
    it('displays user profile picture', () => {
      const $store = createStore({ isLoggedIn: true })
      const wrapper = shallowMount(MainNav, createConfig($store))

      const profileImage = wrapper.find('[data-test="profile-image"]')
      expect(profileImage.exists()).toBe(true)
    })

    it('displays subnavigation menu with additional information', () => {
      const $store = createStore({ isLoggedIn: true })
      const wrapper = shallowMount(MainNav, createConfig($store))

      const subNav = wrapper.find('[data-test="subnav"]')
      expect(subNav.exists()).toBe(true)
    })
  })
})
