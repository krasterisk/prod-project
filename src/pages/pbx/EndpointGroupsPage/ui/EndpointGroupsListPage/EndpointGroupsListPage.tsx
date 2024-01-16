import React, { memo, useCallback } from 'react'
import { useEndpointGroups } from '../../api/endpointGroupsApi'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { EndpointGroupsList } from '@/entities/Pbx'

export const EndpointGroupsListPage = () => {
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

export default memo(EndpointGroupsListPage)
