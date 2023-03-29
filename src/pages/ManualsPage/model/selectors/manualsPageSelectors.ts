import { StateSchema } from 'app/providers/StoreProvider'

export const getManualsPageIsLoading = (state: StateSchema) => state.manualsPage?.isLoading || false
export const getManualsPageError = (state: StateSchema) => state.manualsPage?.error
export const getManualsPageView = (state: StateSchema) => state.manualsPage?.view || 'SMALL'
