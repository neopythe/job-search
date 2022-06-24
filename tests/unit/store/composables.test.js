import { useStore } from 'vuex'
jest.mock('vuex')

import { useFilteredJobs } from '@/store/composables'

describe('composables', () => {
  describe('useFilteredJobs', () => {
    it('retrieves filtered jobs from store', () => {
      useStore.mockReturnValue({
        getters: {
          FILTERED_JOBS: [{ id: 1 }],
        },
      })

      const result = useFilteredJobs()
      expect(result.value).toEqual([{ id: 1 }])
    })
  })
})
