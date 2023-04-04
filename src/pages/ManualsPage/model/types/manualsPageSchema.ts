import { EntityState } from '@reduxjs/toolkit'
import { Manual, ManualView } from 'entities/Manual'
import { SortOrder } from 'shared/types'
import { ManualSortField } from 'entities/Manual/model/types/manual'

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
}
