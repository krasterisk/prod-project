import { StateSchema } from '@/app/providers/StoreProvider'
import { ContextSortField } from '../../../../../entities/Pbx/EndpointGroups/model/consts/consts'

export const getEndpointGroupsPageView = (state: StateSchema) => state.endpointGroupsPage?.view || 'SMALL'
export const getEndpointGroupsPageNum = (state: StateSchema) => state.endpointGroupsPage?.page || 1
export const getEndpointGroupsPageLimit = (state: StateSchema) => state.endpointGroupsPage?.limit || 50
export const getEndpointGroupsHasMore = (state: StateSchema) => state.endpointGroupsPage?.hasMore
export const getEndpointGroupsInited = (state: StateSchema) => state.endpointGroupsPage?._inited
export const getEndpointGroupsPageOrder = (state: StateSchema) => state.endpointGroupsPage?.order ?? 'asc'
export const getEndpointGroupsTab = (state: StateSchema) => state.endpointGroupsPage?.tab ?? ''
export const getEndpointGroupsPageSort = (state: StateSchema) => state.endpointGroupsPage?.sort ?? ContextSortField.NAME
export const getEndpointGroupsPageSearch = (state: StateSchema) => state.endpointGroupsPage?.search ?? ''
