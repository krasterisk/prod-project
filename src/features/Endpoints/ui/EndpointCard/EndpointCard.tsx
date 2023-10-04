import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { EndpointCreateArg, EndpointEdit } from '@/entities/Endpoints'
import { EndpointCreate } from '../../ui/EndpointCreate/EndpointCreate'

export interface EndpointCardProps {
  className?: string
  data?: EndpointCreateArg
  error?: string
  isLoading?: boolean
  readonly?: boolean
  create?: boolean
}

export const EndpointCard = memo((props: EndpointCardProps) => {
  const {
    isLoading,
    error,
    create,
    data
  } = props

  if (create) {
    return (
            <EndpointCreate data={data} create {...props} />
    )
  }

  if (isLoading) {
    return (
            <EndpointSkeleton/>
    )
  }

  if (error) {
    return (
            <EndpointError/>
    )
  }

  return (
        <EndpointEdit {...props} />
  )
})

export const EndpointError = () => {
  const { t } = useTranslation('endpoints')

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

export const EndpointSkeleton = () => {
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
