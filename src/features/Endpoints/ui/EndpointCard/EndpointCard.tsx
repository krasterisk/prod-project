import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { EndpointCreate, EndpointCreateArg, EndpointEdit } from '@/entities/Endpoints'
import { Codecs } from '@/entities/Codecs'
import { useSetEndpoints } from '../../api/endpointsApi'

export interface EndpointCardProps {
  className?: string
  data?: EndpointCreateArg
  error?: string
  isLoading?: boolean
  readonly?: boolean
  create?: boolean
  onChangeContext?: (value?: string) => void
  onChangeExtension?: (value?: string) => void
  onChangeTransport?: (value?: string) => void
  onChangeCodecs?: (value?: Codecs) => void
  onChangeMaxContacts?: (value?: string) => void
  onChangeAuthType?: (value?: string) => void
  onCreate?: (data?: EndpointCreateArg) => void
}

export const EndpointCard = memo((props: EndpointCardProps) => {
  const {
    isLoading,
    error,
    create,
    data
  } = props

  const [endpointMutation] = useSetEndpoints()

  const handleCreateEndpoint = useCallback((data: EndpointCreateArg) => {
    try {
      endpointMutation([{ ...data }])
    } catch (e) {
      throw Error()
    }
  }, [endpointMutation])

  const onCreate = useCallback((data: EndpointCreateArg) => {
    handleCreateEndpoint(data)
  }, [handleCreateEndpoint])

  if (create) {
    return (
            <EndpointCreate onCreate={onCreate} data={data} create {...props} />
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
