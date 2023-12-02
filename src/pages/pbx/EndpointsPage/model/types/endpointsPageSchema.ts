import { EntityState } from '@reduxjs/toolkit'
import { SortOrder } from '@/shared/types/sort'
import { Endpoint, EndpointSortField } from '@/entities/Pbx'
import { ContentView } from '@/entities/Content'

export interface EndpointsPageSchema extends EntityState<Endpoint> {
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ContentView
  _inited?: boolean
  order: SortOrder
  sort: EndpointSortField
  search: string
}
