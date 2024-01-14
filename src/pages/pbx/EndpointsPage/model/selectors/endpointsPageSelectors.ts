import { StateSchema } from '@/app/providers/StoreProvider'
import { EndpointSortField } from '@/entities/Pbx'

export const getEndpointsPageView = (state: StateSchema) => state.endpointsPage?.view || 'SMALL'
export const getEndpointsPageNum = (state: StateSchema) => state.endpointsPage?.page || 1
export const getEndpointsPageLimit = (state: StateSchema) => state.endpointsPage?.limit || 50
export const getEndpointsHasMore = (state: StateSchema) => state.endpointsPage?.hasMore
export const getEndpointsInited = (state: StateSchema) => state.endpointsPage?._inited
export const getEndpointsPageOrder = (state: StateSchema) => state.endpointsPage?.order ?? 'asc'
export const getEndpointsTab = (state: StateSchema) => state.endpointsPage?.tab ?? ''
export const getEndpointsPageSort = (state: StateSchema) => state.endpointsPage?.sort ?? EndpointSortField.EXTEN
export const getEndpointsPageSearch = (state: StateSchema) => state.endpointsPage?.search ?? ''
