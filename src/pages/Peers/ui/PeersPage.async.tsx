import { lazy } from 'react'

export const PeersPageAsync = lazy(async () => await import('./PeersPage'))
