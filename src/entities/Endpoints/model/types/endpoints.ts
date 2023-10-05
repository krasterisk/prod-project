export interface Endpoint {
  id?: string
  endpoint_id: string
  username: string
  password: string
  context: string
  transport: string
  allow: string
  max_contacts: number
  auth_type: string
  vpbx_user_id: string
}

export interface EndpointsListProps {
  className?: string
  isLoading?: boolean
  refetch?: () => void
  data?: Endpoint[]

}
