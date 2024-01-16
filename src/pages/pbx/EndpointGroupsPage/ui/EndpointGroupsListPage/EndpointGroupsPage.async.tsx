import { lazy } from 'react'

export const EndpointGroupsPageAsync = lazy(async () => await import('./EndpointGroupsListPage'))
