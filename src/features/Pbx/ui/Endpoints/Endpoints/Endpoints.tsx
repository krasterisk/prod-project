import { useDeleteEndpoint, useEndpoints } from '../../../api/endpointsApi'
import React, { useCallback } from 'react'
import { EndpointsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { useTranslation } from 'react-i18next'

export const Endpoints = () => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useEndpoints(null)

  const [endpointDeleteMutation] = useDeleteEndpoint()

  const handleDeleteEndpoint = useCallback(async (id: string) => {
    await endpointDeleteMutation(id).unwrap()
  }, [endpointDeleteMutation])

  const onDelete = useCallback((id: string) => {
    handleDeleteEndpoint(id)
  }, [handleDeleteEndpoint])

  const { t } = useTranslation('endpoints')

  if (isError) {
    return (
        <ErrorGetData
            text={
              error && 'data' in error
                ? String(t((error.data as { message: string }).message))
                : String(t('Попробуйте обновить страницу'))
            }
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
