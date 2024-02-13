import { StateSchema } from '@/app/providers/StoreProvider'
import { ProvisionTemplatesSortField } from '@/entities/Pbx'

export const getProvisioningPageView = (state: StateSchema) => state.provisioningPage?.view || 'SMALL'
export const getProvisioningPageNum = (state: StateSchema) => state.provisioningPage?.page || 1
export const getProvisioningPageLimit = (state: StateSchema) => state.provisioningPage?.limit || 25
export const getProvisioningHasMore = (state: StateSchema) => state.provisioningPage?.hasMore
export const getProvisioningInited = (state: StateSchema) => state.provisioningPage?._inited
export const getProvisioningPageOrder = (state: StateSchema) => state.provisioningPage?.order ?? 'asc'
export const getProvisioningPageSort = (state: StateSchema) => state.provisioningPage?.sort ?? ProvisionTemplatesSortField.NAME
export const getProvisioningPageSearch = (state: StateSchema) => state.provisioningPage?.search ?? ''
