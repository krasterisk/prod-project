import { StateSchema } from 'app/providers/StoreProvider'

export const getManualCommentsIsLoading = (state: StateSchema) => state.manualDetailsPage?.comments?.isLoading
export const getManualCommentsError = (state: StateSchema) => state.manualDetailsPage?.comments?.error
