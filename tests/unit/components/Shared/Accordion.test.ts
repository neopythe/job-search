import { mount } from '@vue/test-utils'

import Accordion from '@/components/Shared/Accordion.vue'

describe('Accordion', () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        FontAwesomeIcon: true,
      },
    },
    props: {
      header: 'Test Header',
    },
    slots: {
      default: '<h3>My nested child</h3>',
    },
    ...config,
  })

  it('renders child', async () => {
    const slots = {
      default: '<h3>My nested child</h3>',
    }
    const wrapper = mount(Accordion, createConfig({ slots }))

    expect(wrapper.text()).not.toMatch('My nested child')

    const clickableArea = wrapper.find('[data-test="clickable-area"]')
    await clickableArea.trigger('click')

    expect(wrapper.text()).toMatch('My nested child')
  })

  describe('when we do not provide custom child content', () => {
    it('renders default content', async () => {
      const slots = {}
      const wrapper = mount(Accordion, createConfig({ slots }))
      const clickableArea = wrapper.find('[data-test="clickable-area"]')
      await clickableArea.trigger('click')

      expect(wrapper.text()).toMatch('Whoops, somebody forgot to populate me!')
    })
  })
})
