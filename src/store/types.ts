import { Degree, Job } from '@/api/types'

export interface GlobalState {
  isLoggedIn: boolean
  jobs: Job[]
  degrees: Degree[]
  selectedDegrees: string[]
  selectedOrganizations: string[]
  selectedJobTypes: string[]
}
