import { StateSchema } from 'app/providers/StoreProvider'

export const getManualDetailsData = (state: StateSchema) => state.manualDetails?.data
export const getManualDetailsIsLoading = (state: StateSchema) => state.manualDetails?.isLoading || false
export const getManualDetailsError = (state: StateSchema) => state.manualDetails?.error
