import { useDeleteEndpoint, useEndpoints } from '../../../api/endpointsApi'
import React, { useCallback } from 'react'
import { EndpointsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'

export const Endpoints = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useEndpoints(null)
  const [endpointDeleteMutation] = useDeleteEndpoint()

  const handleDeleteEndpoint = useCallback(async (id: string) => {
    await endpointDeleteMutation(id).unwrap()
  }, [endpointDeleteMutation])

  const onDelete = useCallback((id: string) => {
    handleDeleteEndpoint(id)
  }, [handleDeleteEndpoint])

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  if (isError) {
    const errMsg = error && 'data' in error
      ? String((error.data as { message: string }).message)
      : ''

    return (
        <ErrorGetData
            text={errMsg}
            onRefetch={onRefetch}
        />
    )
  }

  return (
      <EndpointsList
          isLoading={isLoading}
          endpoints={data}
          isError={isError}
          onDelete={onDelete}
      />
  )
}
