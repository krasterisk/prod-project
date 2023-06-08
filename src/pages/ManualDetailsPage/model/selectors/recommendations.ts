import { StateSchema } from '@/app/providers/StoreProvider'

export const getManualRecommendationsIsLoading = (state: StateSchema) => {
  return state.manualDetailsPage?.recommendations?.isLoading
}
export const getManualRecommendationsError = (state: StateSchema) => {
  return state.manualDetailsPage?.comments?.error
}
