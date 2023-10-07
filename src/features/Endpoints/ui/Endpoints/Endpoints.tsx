import { useEndpoints } from '../../api/endpointsApi'
import React, { useEffect } from 'react'
import { EndpointsList } from '@/entities/Endpoints'

export const Endpoints = () => {
  const {
    data,
    isLoading,
    isError,
    refetch
  } = useEndpoints(null)

  useEffect(() => {
    // Повторно получаем данные после выполнения мутации
    refetch()
  }, [refetch])

  return (
        <EndpointsList isLoading={isLoading} isError={isError} data={data} />
  )
}
