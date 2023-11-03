import { FC, lazy } from 'react'
import { EndpointsListProps } from '../../model/types/endpoints'
export const EndpointsListAsync = lazy<FC<EndpointsListProps>>(async () => await import('./EndpointsList'))
