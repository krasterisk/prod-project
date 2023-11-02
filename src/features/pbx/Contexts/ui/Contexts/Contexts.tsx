import React from 'react'
import { useContexts } from '../../api/contextsApi'
import { ContextsList } from '@/entities/pbx'
import { ErrorGetData } from '@/entities/ErrorGetData'

export const Contexts = () => {
  const {
    data,
    isLoading,
    isError,
    error
  } = useContexts(null)

  if (isError) {
    return (
        <ErrorGetData text={JSON.stringify(error)}/>
    )
  }

  return (
        <ContextsList contexts={data} isLoading={isLoading} isError={isError} />
  )
}
