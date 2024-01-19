import { ContentView } from '@/entities/Content'
import { SortOrder } from '@/shared/types/sort'
import { ProvisionTemplatesSortField } from '@/entities/Pbx'

export interface ProvisioningPageSchema {
  // pagination
  page: number
  limit: number
  hasMore: boolean
  // filters
  view: ContentView
  _inited?: boolean
  tab: string
  order: SortOrder
  sort: ProvisionTemplatesSortField
  search: string
}
