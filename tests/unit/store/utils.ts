import state from '@/store/state'

import { GlobalState } from '@/store/types'
import { Job } from '@/api/types'

const createState = (config: Partial<GlobalState> = {}): GlobalState => {
  const initialState = state()
  return { ...initialState, ...config }
}

const createJob = (config: Partial<Job> = {}): Job => ({
  id: 1,
  title: 'Angular Developer',
  organization: 'Vue and Me',
  degree: "Master's",
  jobType: 'Intern',
  locations: ['Lisbon'],
  minimumQualifications: [],
  preferredQualifications: [],
  description: [],
  dateAdded: '2021-07-04',
  ...config,
})

export { createJob, createState }
