import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { useEndpoints, useSetEndpoints } from '../../api/endpointsApi'
import { Endpoint, EndpointCreateCard } from '@/entities/Endpoints'
import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCard.module.scss'

export interface EndpointCardProps {
  className?: string
  error?: string
  isLoading?: boolean
  readonly?: boolean
}

export const EndpointCard = memo((props: EndpointCardProps) => {
  const {
    className,
    isLoading,
    error
  } = props

  const { t } = useTranslation('endpoints')
  const [endpointMutation] = useSetEndpoints()
  const { refetch } = useEndpoints(null)

  const handleCreateEndpoint = useCallback((data: Endpoint) => {
    try {
      endpointMutation([{ ...data }])
      refetch()
    } catch (e) {
      throw Error()
    }
  }, [endpointMutation, refetch])

  const onCreate = useCallback((data: Endpoint) => {
    handleCreateEndpoint(data)
    refetch()
  }, [handleCreateEndpoint, refetch])

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

  if (error) {
    return (
        <HStack
            justify={'center'}
            max
        >
            <Text
                variant={'error'}
                title={t('Ошибка получения данных абонента!')}
                text={t('Попробуйте обновить страницу')}
                align={'center'}
            />
        </HStack>
    )
  }

  return (
        <VStack gap={'8'} max className={classNames(cls.EndpointCard, {}, [className])}>
            <EndpointCreateCard onCreate={onCreate}/>
        </VStack>
  )
})
