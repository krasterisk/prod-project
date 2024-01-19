import { StateSchema } from '@/app/providers/StoreProvider'
import { EndpointGroupsSortField } from '@/entities/Pbx'

export const getEndpointGroupsPageView = (state: StateSchema) => state.endpointGroupsPage?.view || 'SMALL'
export const getEndpointGroupsPageNum = (state: StateSchema) => state.endpointGroupsPage?.page || 1
export const getEndpointGroupsPageLimit = (state: StateSchema) => state.endpointGroupsPage?.limit || 50
export const getEndpointGroupsHasMore = (state: StateSchema) => state.endpointGroupsPage?.hasMore
export const getEndpointGroupsInited = (state: StateSchema) => state.endpointGroupsPage?._inited
export const getEndpointGroupsPageOrder = (state: StateSchema) => state.endpointGroupsPage?.order ?? 'asc'
export const getEndpointGroupsPageSort = (state: StateSchema) => state.endpointGroupsPage?.sort ?? EndpointGroupsSortField.NAME
export const getEndpointGroupsPageSearch = (state: StateSchema) => state.endpointGroupsPage?.search ?? ''
