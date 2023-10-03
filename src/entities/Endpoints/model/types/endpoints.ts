export interface Endpoint {
  id: number
  endpoint_id: string
  username: string
  password: string
  context: string
  transport: string
  allow: string
  max_contacts: number
  auth_type: string
  vpbx_user_id: number
}

export interface EndpointsListProps {
  className?: string
  isLoading?: boolean
  data?: Endpoint[]

}
