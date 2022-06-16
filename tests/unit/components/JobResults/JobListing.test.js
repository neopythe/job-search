import { mount, RouterLinkStub } from '@vue/test-utils'

import JobListing from '@/components/JobResults/JobListing.vue'

describe('JobListing', () => {
  const createJobProps = (jobProps = {}) => ({
    title: 'Vue Developer',
    organization: 'AirBnB',
    locations: ['Indianapolis'],
    minimumQualifications: ['Succeed'],
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

  it('renders job locations', () => {
    const jobProps = createJobProps({ locations: ['Orlando', 'Jacksonville'] })
    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('Orlando')
    expect(wrapper.text()).toMatch('Jacksonville')
  })

  it('renders job qualifications', () => {
    const jobProps = createJobProps({
      minimumQualifications: ['Code', 'Develop'],
    })
    const wrapper = mount(JobListing, createConfig(jobProps))
    expect(wrapper.text()).toMatch('Code')
    expect(wrapper.text()).toMatch('Develop')
  })
})
