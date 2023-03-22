import { StateSchema } from 'app/providers/StoreProvider'

export const getManualCommentsIsLoading = (state: StateSchema) => state.manualDetailsComments?.isLoading
export const getManualCommentsError = (state: StateSchema) => state.manualDetailsComments?.error
