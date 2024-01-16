import { ContentView } from '@/entities/Content'
import { SortOrder } from '@/shared/types/sort'
import { EndpointGroupsSortField } from '@/entities/Pbx'

export interface EndpointGroupsPageSchema {
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ContentView
  _inited?: boolean
  tab: string
  order: SortOrder
  sort: EndpointGroupsSortField
  search: string
}
