import { EntityState } from '@reduxjs/toolkit'
import { Manual, ManualView } from 'entities/Manual'

export interface ManualsPageSchema extends EntityState<Manual> {
    isLoading?: boolean
    error?: string
    view: ManualView
}
