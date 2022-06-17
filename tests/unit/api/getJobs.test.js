import axios from 'axios'
jest.mock('axios')

import getJobs from '@/api/getJobs.js'

describe('getJobs', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'Java Engineer',
        },
      ],
    })
  })

  it('fetches jobs that candidates can apply to', async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith('http://myfakeapi.com/jobs')
  })

  it('extracts jobs from response', async () => {
    const data = await getJobs()
    expect(data).toEqual([
      {
        id: 1,
        title: 'Java Engineer',
      },
    ])
  })
})
