import { useEndpoints } from '../../api/endpointsApi'
import { EndpointsList } from '@/entities/Endpoints'

export const Endpoints = () => {
  const {
    data,
    isLoading
  } = useEndpoints(null)

  return (
        <EndpointsList isLoading={isLoading} data={data} />
  )
}
