import { mount } from '@vue/test-utils'
import { useRouter } from 'vue-router'
jest.mock('vue-router')
const useRouterMock = useRouter as jest.Mock

import JobSearchForm from '@/components/JobSearch/JobSearchForm.vue'

describe('JobSearchForm', () => {
  describe('when user submits form', () => {
    it("directs user to job results page with user's search parameters", async () => {
      const push = jest.fn()
      useRouterMock.mockReturnValue({ push })

      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      })

      const roleInput = wrapper.find('[data-test="role-input"]')
      await roleInput.setValue('Vue Developer')

      const locationInput = wrapper.find('[data-test="location-input"]')
      await locationInput.setValue('Dallas')

      const submitButton = wrapper.find('[data-test="form-submit-button"]')
      await submitButton.trigger('click')

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'Vue Developer',
          location: 'Dallas',
        },
      })
    })
  })
})
