import React from 'react'
import { useGetContexts } from '../../../api/contextsApi'
import { ContextsList } from '@/entities/Pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'

export const Contexts = () => {
  const authData = useSelector(getUserAuthData)
  const vpbx_user_id = authData?.vpbx_user_id || '0'
  const {
    data,
    isLoading,
    isError,
    error
  } = useGetContexts({ vpbx_user_id })

  if (isError) {
    return (
        <ErrorGetData text={JSON.stringify(error)}/>
    )
  }

  return (
        <ContextsList contexts={data} isLoading={isLoading} isError={isError} />
  )
}
