import React, { useCallback } from 'react'
import { EndpointGroupsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { useEndpointGroups } from '../../../api/endpointGroupsApi'

export const EndpointGroups = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useEndpointGroups(null)

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
      <EndpointGroupsList
          isLoading={isLoading}
          endpointGroups={data}
          isError={isError}
      />
  )
}
