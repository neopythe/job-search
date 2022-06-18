import { mount } from '@vue/test-utils'

import Accordion from '@/components/Shared/Accordion.vue'

describe('Accordion', () => {
  it('renders child', async () => {
    const wrapper = mount(Accordion, {
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
    })

    expect(wrapper.text()).not.toMatch('My nested child')
    const clickableArea = wrapper.find('[data-test="clickable-area"]')
    await clickableArea.trigger('click')
    expect(wrapper.text()).toMatch('My nested child')
  })
})
