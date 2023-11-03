import { useEndpoints } from '../../../api/endpointsApi'
import React from 'react'
import { EndpointsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'

export const Endpoints = () => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useEndpoints(null)

  if (isError) {
    return (
        <ErrorGetData text={JSON.stringify(error)}/>
    )
  }

  return (
      <EndpointsList isLoading={isLoading} endpoints={data} isError={isError} />
  )
}
