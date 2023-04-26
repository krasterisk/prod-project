import { EntityState } from '@reduxjs/toolkit'
import { Manual, ManualView, ManualHashtagsTypes, ManualSortField } from '@/entities/Manual'
import { SortOrder } from '@/shared/types'

export interface ManualsPageSchema extends EntityState<Manual> {
    isLoading?: boolean
    error?: string
    // pagination
    page: number
    limit: number
    hasMore: boolean
    // filters
    view: ManualView
    _inited?: boolean
    order: SortOrder
    sort: ManualSortField
    search: string
    hashtag: ManualHashtagsTypes
}
