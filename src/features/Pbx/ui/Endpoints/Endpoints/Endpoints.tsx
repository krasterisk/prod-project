import { useEndpoints } from '../../../api/endpointsApi'
import React from 'react'
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
      <EndpointsList isLoading={isLoading} endpoints={data} isError={isError} />
  )
}
