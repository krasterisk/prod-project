import { Manual } from './manual'

export interface ManualDetailsSchema {
    isLoading: boolean
    error?: string
    data?: Manual
}
