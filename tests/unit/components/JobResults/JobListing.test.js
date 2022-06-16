import { mount, RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  it('renders job title', () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          title: 'Vue Developer',
        },
      },
      global: {
        stubs: {
          $router: RouterLinkStub,
        },
      },
    })
    expect(wrapper.text()).toMatch('Vue Developer')
  })

  it('renders job organization', () => {
    const wrapper = mount(JobListing, {
      props: {
        job: {
          organization: 'AirBnB',
        },
      },
      global: {
        stubs: {
          $router: RouterLinkStub,
        },
      },
    })
    expect(wrapper.text()).toMatch('AirBnB')
  })
})
