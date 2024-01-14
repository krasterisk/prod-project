import { ContentView } from '@/entities/Content'
import { SortOrder } from '@/shared/types/sort'
import { ContextSortField } from '../../../../../entities/Pbx/Contexts/model/consts/consts'

export interface ContextsPageSchema {
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ContentView
  _inited?: boolean
  tab: string
  order: SortOrder
  sort: ContextSortField
  search: string
}
