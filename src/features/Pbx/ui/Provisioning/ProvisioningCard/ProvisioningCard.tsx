import React, { memo, useCallback } from 'react'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { ProvisionTemplate } from '@/entities/Pbx'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningCard.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getRouteProvisioning } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ProvisioningCreateCard } from '../ProvisioningCreateCard/ProvisioningCreateCard'
import { ProvisioningEditCard } from '../ProvisioningEditCard/ProvisioningEditCard'
import {
  provisioningApi,
  useDeleteProvision,
  useSetProvision,
  useUpdateProvision
} from '../../../../../pages/pbx/ProvisioningPage/api/provisioningApi'

export interface ProvisioningCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
  isEdit?: boolean
  provisioningId?: string
}

export const ProvisioningCard = memo((props: ProvisioningCardProps) => {
  const {
    className,
    isLoading,
    isEdit,
    provisioningId
  } = props

  const [mutation, { isError, error }] = useSetProvision()
  const [updateMutation] = useUpdateProvision()
  const [deleteMutation] = useDeleteProvision()

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreate = useCallback((data: ProvisionTemplate) => {
    mutation([{ ...data }])
      .unwrap()
      .then((payload) => {
        // console.log('fulfilled', payload)
        dispatch(
          provisioningApi.util.updateQueryData('getProvisions', null, (draft) => {
            draft.push(payload[0])
          })
        )
        navigate(getRouteProvisioning())
      })
      .catch(() => {
      })
  }, [dispatch, mutation, navigate])

  const onCreate = useCallback((data: ProvisionTemplate) => {
    handleCreate(data)
  }, [handleCreate])

  const handleEdit = useCallback(async (data: ProvisionTemplate) => {
    try {
      await updateMutation(data).unwrap()
    } finally {
      navigate(getRouteProvisioning())
    }
  }, [updateMutation, navigate])

  const handleDelete = useCallback(async (id: string) => {
    try {
      await deleteMutation(id).unwrap()
    } finally {
      navigate(getRouteProvisioning())
    }
  }, [deleteMutation, navigate])

  const onDelete = useCallback((id: string) => {
    handleDelete(id)
  }, [handleDelete])

  const onEdit = useCallback((data: ProvisionTemplate) => {
    handleEdit(data)
  }, [handleEdit])

  if (!provisioningId && isEdit) {
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
        <VStack gap={'8'} max className={classNames(cls.ProvisioningCard, {}, [className])}>
            {
                isEdit
                  ? <ProvisioningEditCard
                        onEdit={onEdit}
                        provisioningId={provisioningId}
                        onDelete={onDelete}
                    />
                  : <ProvisioningCreateCard
                        onCreate={onCreate}
                        isError={isError}
                        error={error}
                    />

            }
        </VStack>
  )
})
