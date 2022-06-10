import { mount } from '@vue/test-utils'

import MainNav from '@/components/MainNav.vue'

describe('MainNav', () => {
  it('displays company name', () => {
    const wrapper = mount(MainNav)
    expect(wrapper.text()).toMatch('Gaggle Careers')
  })

  it('displays menu items for navigation', () => {
    const wrapper = mount(MainNav)
    const navigationMenuItems = wrapper.findAll(
      '[data-test="main-nav-list-item"]'
    )
    const navigationMenuTexts = navigationMenuItems.map(item => item.text())
    expect(navigationMenuTexts).toEqual([
      'Teams',
      'Locations',
      'Life at Gaggle',
      'How we hire',
      'Students',
      'Jobs',
    ])
  })

  describe('when user is logged out', () => {
    it('prompts user to sign in', () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: false,
          }
        },
      })
      const loginButton = wrapper.find('[data-test="login-button"]')
      const profileImage = wrapper.find('[data-test="profile-image"]')
      expect(loginButton.exists()).toBe(true)
      expect(profileImage.exists()).toBe(false)
    })
  })

  describe('when user logs in', () => {
    it('displays user profile picture', () => {
      const wrapper = mount(MainNav, {
        data() {
          return {
            isLoggedIn: true,
          }
        },
      })
      const loginButton = wrapper.find('[data-test="login-button"]')
      const profileImage = wrapper.find('[data-test="profile-image"]')
      expect(loginButton.exists()).toBe(false)
      expect(profileImage.exists()).toBe(true)
    })
  })
})
