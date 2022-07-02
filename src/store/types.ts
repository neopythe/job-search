import { Degree, Job } from '@/api/types'

export interface GlobalState {
  isLoggedIn: boolean
  jobs: Job[]
  degrees: Degree[]
  selectedDegrees: string[]
  selectedJobTypes: string[]
  selectedOrganizations: string[]
  skillsSearchTerm: string
}
