import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextCard.module.scss'
import React, { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { ContextCreateCard } from '../ContextCreateCard/ContextCreateCard'
import { Context } from '@/entities/Pbx'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { useNavigate } from 'react-router-dom'
import { getRouteContexts } from '@/shared/const/router'
import { contextsApi, useDeleteContext, useSetContexts, useUpdateContext } from '../../../../../pages/pbx/ContextsPage/api/contextsApi'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ContextEditCard } from '../ContextEditCard/ContextEditCard'

interface ContextCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
  isEdit?: boolean
  contextId?: string

}

export const ContextCard = memo((props: ContextCardProps) => {
  const {
    className,
    isLoading,
    isEdit,
    contextId
  } = props

  const [contextMutation, { isError, error }] = useSetContexts()
  const [contextUpdateMutation] = useUpdateContext()
  const [contextDeleteMutation] = useDeleteContext()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const handleCreateContext = useCallback((data: Context) => {
    contextMutation([{ ...data }])
      .unwrap()
      .then((payload) => {
        // console.log('fulfilled', payload)
        dispatch(
          contextsApi.util.updateQueryData('getContexts', { vpbx_user_id }, (draftContexts) => {
            draftContexts.push(payload[0])
          })
        )
        navigate(getRouteContexts())
      })
      .catch((e) => {
        // console.log(e)
      })
  }, [contextMutation, dispatch, navigate, vpbx_user_id])

  const onCreate = useCallback((data: Context) => {
    handleCreateContext(data)
  }, [handleCreateContext])

  const handleEditContext = useCallback(async (data: Context) => {
    try {
      await contextUpdateMutation(data).unwrap()
    } finally {
      navigate(getRouteContexts())
    }
  }, [contextUpdateMutation, navigate])

  const onEdit = useCallback((data: Context) => {
    handleEditContext(data)
  }, [handleEditContext])

  const handleDeleteContext = useCallback(async (id: string) => {
    try {
      await contextDeleteMutation(id).unwrap()
    } finally {
      navigate(getRouteContexts())
    }
  }, [contextDeleteMutation, navigate])

  const onDelete = useCallback((id: string) => {
    handleDeleteContext(id)
  }, [handleDeleteContext])

  if (!contextId && isEdit) {
    return (
            <ErrorGetData />
    )
  }

  if (isLoading) {
    return (
            <Card padding="24" max>
                <VStack gap="32">
                    <HStack gap="32" max>
                        <VStack gap="16" max>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                            <Skeleton width="100%" height={38}/>
                        </VStack>
                    </HStack>
                </VStack>
            </Card>
    )
  }

  return (
        <VStack gap={'8'} max className={classNames(cls.ContextCard, {}, [className])}>
            {
                isEdit
                  ? <ContextEditCard
                        onEdit={onEdit}
                        contextId={contextId}
                        onDelete={onDelete}
                    />
                  : <ContextCreateCard
                        onCreate={onCreate}
                        isError={isError}
                        error={error}
                    />

            }
        </VStack>
  )
})
