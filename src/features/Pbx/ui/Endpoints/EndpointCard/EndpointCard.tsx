import React, { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { endpointsApi, useDeleteEndpoint, useSetEndpoints, useUpdateEndpoint } from '../../../api/endpointsApi'
import { Endpoint } from '@/entities/Pbx'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCard.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getRouteEndpoints } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import { EndpointCreateCard } from '../EndpointCreateCard/EndpointCreateCard'
import { EndpointEditCard } from '../EndpointEditCard/EndpointEditCard'
import { ErrorGetData } from '@/entities/ErrorGetData'

export interface EndpointCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
  isEdit?: boolean
  endpointId?: string
}

export const EndpointCard = memo((props: EndpointCardProps) => {
  const {
    className,
    isLoading,
    isEdit,
    endpointId
  } = props

  const [endpointMutation, { isError, error }] = useSetEndpoints()
  const [endpointUpdateMutation] = useUpdateEndpoint()
  const [endpointDeleteMutation] = useDeleteEndpoint()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreateEndpoint = useCallback((data: Endpoint) => {
    endpointMutation([{ ...data }])
      .unwrap()
      .then((payload) => {
        // console.log('fulfilled', payload)
        dispatch(
          endpointsApi.util.updateQueryData('getEndpoints', null, (draftEndpoints) => {
            draftEndpoints.push(payload[0])
          })
        )
        navigate(getRouteEndpoints())
      })
      .catch(() => {
      })
  }, [dispatch, endpointMutation, navigate])

  const onCreate = useCallback((data: Endpoint) => {
    handleCreateEndpoint(data)
  }, [handleCreateEndpoint])

  const handleEditEndpoint = useCallback(async (data: Endpoint) => {
    try {
      await endpointUpdateMutation(data).unwrap()
    } finally {
      navigate(getRouteEndpoints())
    }

    // .unwrap()
    // .then((payload) => {
    //   console.log('fulfilled', payload)
    //   dispatch(
    //     endpointsApi.util.updateQueryData('getEndpoints', null, (draftEndpoints) => {
    //       Object.assign(draftEndpoints, payload)
    //     })
    //   )
    //   navigate(getRouteEndpoints())
    // })
    // .catch(() => {
    //
    // })
  }, [endpointUpdateMutation, navigate])

  const handleDeleteEndpoint = useCallback(async (id: string) => {
    try {
      await endpointDeleteMutation(id).unwrap()
    } finally {
      navigate(getRouteEndpoints())
    }
  }, [endpointDeleteMutation, navigate])

  const onDelete = useCallback((id: string) => {
    handleDeleteEndpoint(id)
  }, [handleDeleteEndpoint])

  const onEdit = useCallback((data: Endpoint) => {
    handleEditEndpoint(data)
  }, [handleEditEndpoint])

  if (!endpointId && isEdit) {
    return (
            <ErrorGetData/>
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
        <VStack gap={'8'} max className={classNames(cls.EndpointCard, {}, [className])}>
            {
                isEdit
                  ? <EndpointEditCard
                        onEdit={onEdit}
                        isError={isError}
                        endpointId={endpointId}
                        onDelete={onDelete}
                    />
                  : <EndpointCreateCard
                        onCreate={onCreate}
                        isError={isError}
                        error={error}
                    />

            }
        </VStack>
  )
})
