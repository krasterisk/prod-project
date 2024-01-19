import { ContentView } from '@/entities/Content'

export interface AllProvisionTemplates {
  count: number
  rows: ProvisionTemplate[]
}

export interface ProvisionTemplate {
  id: string
  name: string
  filename: string
  description: string
  vpbx_user_id: string
}

export interface ProvisioningListProps {
  className?: string
  isLoading?: boolean
  isError?: boolean
  view?: ContentView
  provisionTemplates?: ProvisionTemplate[]
  onDelete?: (id: string) => void
}
