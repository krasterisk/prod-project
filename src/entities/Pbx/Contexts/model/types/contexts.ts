import { ContentView } from '@/entities/Content'

export interface AllContexts {
  count: number
  rows: Context[]
}

export interface Context {
  id: string
  name: string
  includes: string
  description: string
  vpbx_user_id?: string
}

export interface ContextsListProps {
  className?: string
  isLoading?: boolean
  isError?: boolean
  contexts?: Context[]
  view?: ContentView
  onDelete?: (id: string) => void
}
