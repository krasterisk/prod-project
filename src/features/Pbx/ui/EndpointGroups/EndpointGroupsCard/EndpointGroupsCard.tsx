import React, { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { EndpointGroups } from '@/entities/Pbx'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsCard.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getRouteEndpointGroups } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import { ErrorGetData } from '@/entities/ErrorGetData'
import {
  endpointGroupsApi,
  useDeleteEndpointGroup,
  useSetEndpointGroups,
  useUpdateEndpointGroup
} from '../../../api/endpointGroupsApi'
import { EndpointGroupsCreateCard } from '../EndpointGroupsCreateCard/EndpointGroupsCreateCard'
import { EndpointGroupsEditCard } from '../EndpointGroupsEditCard/EndpointGroupsEditCard'

export interface EndpointGroupsCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
  isEdit?: boolean
  endpointGroupId?: string
}

export const EndpointGroupsCard = memo((props: EndpointGroupsCardProps) => {
  const {
    className,
    isLoading,
    isEdit,
    endpointGroupId
  } = props

  const [endpointGroupMutation, { isError, error }] = useSetEndpointGroups()
  const [endpointGroupUpdateMutation] = useUpdateEndpointGroup()
  const [endpointGroupDeleteMutation] = useDeleteEndpointGroup()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreateEndpointGroup = useCallback((data: EndpointGroups) => {
    endpointGroupMutation([{ ...data }])
      .unwrap()
      .then((payload) => {
        // console.log('fulfilled', payload)
        dispatch(
          endpointGroupsApi.util.updateQueryData('getEndpointGroups', null, (draftEndpointGroups) => {
            draftEndpointGroups.push(payload[0])
          })
        )
        navigate(getRouteEndpointGroups())
      })
      .catch(() => {
      })
  }, [dispatch, endpointGroupMutation, navigate])

  const onCreate = useCallback((data: EndpointGroups) => {
    handleCreateEndpointGroup(data)
  }, [handleCreateEndpointGroup])

  const handleEditEndpointGroup = useCallback(async (data: EndpointGroups) => {
    try {
      await endpointGroupUpdateMutation(data).unwrap()
    } finally {
      navigate(getRouteEndpointGroups())
    }
  }, [endpointGroupUpdateMutation, navigate])

  const onEdit = useCallback((data: EndpointGroups) => {
    handleEditEndpointGroup(data)
  }, [handleEditEndpointGroup])

  const handleDeleteEndpointGroup = useCallback(async (id: string) => {
    try {
      await endpointGroupDeleteMutation(id).unwrap()
    } finally {
      navigate(getRouteEndpointGroups())
    }
  }, [endpointGroupDeleteMutation, navigate])

  const onDelete = useCallback((id: string) => {
    handleDeleteEndpointGroup(id)
  }, [handleDeleteEndpointGroup])

  if (!endpointGroupId && isEdit) {
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
      <VStack gap={'8'} max className={classNames(cls.EndpointCard, {}, [className])}>
        {
          isEdit
            ? <EndpointGroupsEditCard
                  onEdit={onEdit}
                  endpointGroupId={endpointGroupId}
                  onDelete={onDelete}
              />
            : <EndpointGroupsCreateCard
                  onCreate={onCreate}
                  isError={isError}
                  error={error}
              />

        }
      </VStack>
  )
})
