import { EntityState } from '@reduxjs/toolkit'
import { Manual } from '@/entities/Manual'

export interface ManualDetailsRecommendationsSchema extends EntityState<Manual> {
  isLoading?: boolean
  error?: string
}
