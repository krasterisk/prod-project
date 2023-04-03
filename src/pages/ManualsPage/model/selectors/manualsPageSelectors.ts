import { StateSchema } from 'app/providers/StoreProvider'

export const getManualsPageIsLoading = (state: StateSchema) => state.manualsPage?.isLoading || false
export const getManualsPageError = (state: StateSchema) => state.manualsPage?.error
export const getManualsPageView = (state: StateSchema) => state.manualsPage?.view || 'SMALL'
export const getManualsPageNum = (state: StateSchema) => state.manualsPage?.page || 1
export const getManualsPageLimit = (state: StateSchema) => state.manualsPage?.limit || 9
export const getManualsPageHasMore = (state: StateSchema) => state.manualsPage?.hasMore
export const getManualsPageInited = (state: StateSchema) => state.manualsPage?._inited
