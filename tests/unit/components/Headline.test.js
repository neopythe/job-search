import { mount } from '@vue/test-utils'

import Headline from '@/components/Headline.vue'

describe('Headline', () => {
  it('displays introductory action verb', () => {
    jest.useFakeTimers('legacy')
    const wrapper = mount(Headline)
    const actionPhrase = wrapper.find('[data-test="action-phrase"]')
    expect(actionPhrase.text()).toBe('Build for everyone')
    jest.useRealTimers()
  })
})
