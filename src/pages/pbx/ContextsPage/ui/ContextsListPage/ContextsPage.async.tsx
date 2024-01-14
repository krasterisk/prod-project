import { lazy } from 'react'

export const ContextsPageAsync = lazy(async () => await import('./ContextsListPage'))
