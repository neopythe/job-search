import { mount, RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnB',
    ...jobProps,
  })

  const createConfig = jobProps => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        $router: RouterLinkStub,
      },
    },
  })

  it('renders job title', () => {
    const jobProps = createJobProps({ title: 'Vue Programmer' })

    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('Vue Programmer')
  })

  it('renders job organization', () => {
    const jobProps = createJobProps({ organization: 'AirBnB' })

    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('AirBnB')
  })
})
