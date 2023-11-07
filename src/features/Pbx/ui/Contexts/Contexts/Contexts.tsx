import React from 'react'
import { useGetContexts } from '../../../api/contextsApi'
import { ContextsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { useTranslation } from 'react-i18next'

export const Contexts = () => {
  const authData = useSelector(getUserAuthData)
  const vpbx_user_id = authData?.vpbx_user_id || '0'
  const {
    data,
    isLoading,
    isError,
    error
  } = useGetContexts({ vpbx_user_id })

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
        <ContextsList contexts={data} isLoading={isLoading} isError={isError} />
  )
}
