import { ContentView } from '@/entities/Content'

export interface AllEndpoints {
  count: number
  rows: Endpoint[]
}

export interface Endpoint {
  id: string
  endpoint_id: string
  username: string
  password: string
  context: string
  group_uid?: string
  transport: string
  allow: string
  max_contacts: number
  auth_type: string
  vpbx_user_id: string
}

export interface EndpointsListProps {
  className?: string
  isLoading?: boolean
  isError?: boolean
  view?: ContentView
  endpoints?: Endpoint[]
  onDelete?: (id: string) => void
}
