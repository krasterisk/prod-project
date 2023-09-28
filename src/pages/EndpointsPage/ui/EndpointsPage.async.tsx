import { lazy } from 'react'

export const EndpointsPageAsync = lazy(async () => await import('./EndpointsPage'))
