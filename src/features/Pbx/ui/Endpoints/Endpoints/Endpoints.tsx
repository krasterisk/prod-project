import { useEndpoints } from '../../../api/endpointsApi'
import React, { useCallback } from 'react'
import { EndpointsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ContentView } from '@/entities/Content'

interface EndpointsProps {
  className?: string
  view?: ContentView
}

export const Endpoints = ({ className, view }: EndpointsProps) => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useEndpoints(null)

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
          className={className}
          isLoading={isLoading}
          endpoints={data}
          isError={isError}
          view={view}
      />
  )
}
