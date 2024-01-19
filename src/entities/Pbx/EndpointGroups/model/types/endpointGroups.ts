import { ContentView } from '@/entities/Content'

export interface EndpointGroups {
  id: string
  name: string
  description: string
  vpbx_user_id: string
}

export interface AllEndpointGroups {
  count: number
  rows: EndpointGroups[]
}

export interface EndpointGroupsListProps {
  className?: string
  isLoading?: boolean
  isError?: boolean
  endpointGroups?: EndpointGroups[]
  view?: ContentView
  onDelete?: (id: string) => void
}
