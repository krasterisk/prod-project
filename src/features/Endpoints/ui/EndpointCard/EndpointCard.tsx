import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { endpointsApi, useSetEndpoints } from '../../api/endpointsApi'
import { Endpoint, EndpointCreateCard } from '@/entities/Endpoints'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCard.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getRouteEndpoints } from '@/shared/const/router'
import { useNavigate } from 'react-router-dom'
import { ErrorGetData } from '@/entities/ErrorGetData'

export interface EndpointCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
}

export const EndpointCard = memo((props: EndpointCardProps) => {
  const {
    className,
    isLoading
  } = props

  const { t } = useTranslation('endpoints')
  const [endpointMutation, { isError, error }] = useSetEndpoints()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleCreateEndpoint = useCallback((data: Endpoint) => {
    endpointMutation([{ ...data }])
      .unwrap()
      .then((payload) => {
        console.log('fulfilled', payload)
        dispatch(
          endpointsApi.util.updateQueryData('getEndpoints', null, (draftEndpoints) => {
            draftEndpoints.push(payload[0])
          })
        )
        navigate(getRouteEndpoints())
      })
      .catch((error) => {
        console.log(error)
      })
  }, [dispatch, endpointMutation, navigate])

  const onCreate = useCallback((data: Endpoint) => {
    handleCreateEndpoint(data)
  }, [handleCreateEndpoint])

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

  if (isError) {
    return (
        <ErrorGetData error={JSON.stringify(error)}/>
    )
  }

  return (
        <VStack gap={'8'} max className={classNames(cls.EndpointCard, {}, [className])}>
            <EndpointCreateCard onCreate={onCreate}/>
        </VStack>
  )
})
