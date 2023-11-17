import React, { useCallback } from 'react'
import { EndpointGroupsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { useTranslation } from 'react-i18next'
import { useDeleteEndpointGroup, useEndpointGroups } from '../../../api/endpointGroupsApi'

export const EndpointGroups = () => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useEndpointGroups(null)

  const [endpointGroupDeleteMutation] = useDeleteEndpointGroup()

  const handleDeleteEndpointGroup = useCallback(async (id: string) => {
    await endpointGroupDeleteMutation(id).unwrap()
  }, [endpointGroupDeleteMutation])

  const onDelete = useCallback((id: string) => {
    handleDeleteEndpointGroup(id)
  }, [handleDeleteEndpointGroup])

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
      <EndpointGroupsList
          isLoading={isLoading}
          endpointGroups={data}
          isError={isError}
          onDelete={onDelete}
      />
  )
}
