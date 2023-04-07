import { StateSchema } from 'app/providers/StoreProvider'

export const getManualRecommendationsIsLoading = (state: StateSchema) => state.manualDetailsRecommendations?.isLoading
export const getManualRecommendationsError = (state: StateSchema) => state.manualDetailsRecommendations?.error
