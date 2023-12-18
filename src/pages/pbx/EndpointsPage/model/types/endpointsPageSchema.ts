import { EndpointSortField } from '@/entities/Pbx'
import { ContentView } from '@/entities/Content'
import { SortOrder } from '@/shared/types/sort'

export interface EndpointsPageSchema {
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ContentView
  _inited?: boolean
  tab: string
  order: SortOrder
  sort: EndpointSortField
  search: string
}
