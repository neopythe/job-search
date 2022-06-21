import { FETCH_JOBS, RECEIVE_JOBS } from '@/store/constants'

import getJobs from '@/api/getJobs'

const actions = {
  [FETCH_JOBS]: async context => {
    const jobListings = await getJobs()
    context.commit(RECEIVE_JOBS, jobListings)
  },
}

export default actions
