import { useRoute } from 'vue-router'
jest.mock('vue-router')

import useConfirmRoute from '@/composables/useConfirmRoute'

const useRouteMock = useRoute as jest.Mock

describe('useConfirmRoute', () => {
  it('determines if page route matches specified route', () => {
    useRouteMock.mockReturnValue({ name: 'Home' })
    const routeName = 'Home'
    const result = useConfirmRoute(routeName)
    expect(result.value).toBe(true)
  })
})
