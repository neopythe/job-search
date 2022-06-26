import { useRoute } from 'vue-router'
jest.mock('vue-router')

import useCurrentPage from '@/composables/useCurrentPage'

describe('useCurrentPage', () => {
  describe('when query params include page', () => {
    it('returns page', () => {
      useRoute.mockReturnValue({
        query: {
          page: 5,
        },
      })
      const result = useCurrentPage()

      expect(result.value).toBe(5)
    })
  })

  describe('when query params exclude page', () => {
    it('defaults to page 1', () => {
      useRoute.mockReturnValue({
        query: {
          page: null,
        },
      })
      const result = useCurrentPage()

      expect(result.value).toBe(1)
    })
  })
})
