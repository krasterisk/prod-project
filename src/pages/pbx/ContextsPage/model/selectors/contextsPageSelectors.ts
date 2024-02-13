import { StateSchema } from '@/app/providers/StoreProvider'
import { ContextSortField } from '../../../../../entities/Pbx/Contexts/model/consts/consts'

export const getContextsPageView = (state: StateSchema) => state.contextsPage?.view || 'SMALL'
export const getContextsPageNum = (state: StateSchema) => state.contextsPage?.page || 1
export const getContextsPageLimit = (state: StateSchema) => state.contextsPage?.limit || 25
export const getContextsHasMore = (state: StateSchema) => state.contextsPage?.hasMore
export const getContextsInited = (state: StateSchema) => state.contextsPage?._inited
export const getContextsPageOrder = (state: StateSchema) => state.contextsPage?.order ?? 'asc'
export const getContextsTab = (state: StateSchema) => state.contextsPage?.tab ?? ''
export const getContextsPageSort = (state: StateSchema) => state.contextsPage?.sort ?? ContextSortField.NAME
export const getContextsPageSearch = (state: StateSchema) => state.contextsPage?.search ?? ''
