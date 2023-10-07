import { useEndpoints } from '../../api/endpointsApi'
import React from 'react'
import { EndpointsList } from '@/entities/Endpoints'

export const Endpoints = () => {
  const {
    data,
    isLoading,
    isError
  } = useEndpoints(null)

  return (
        <EndpointsList isLoading={isLoading} isError={isError} data={data} />
  )
}
