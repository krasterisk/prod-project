import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointItem.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Endpoint } from '../../model/types/endpoints'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'

import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteEndpointEdit } from '@/shared/const/router'
import { ContentView } from '@/entities/Content'

interface EndpointItemProps {
  className?: string
  endpoint: Endpoint
  onEdit?: (id: string) => void
  view?: ContentView
  target?: HTMLAttributeAnchorTarget
}

export const EndpointItem = memo((props: EndpointItemProps) => {
  const {
    className,
    endpoint,
    view = 'SMALL',
    target
  } = props

  if (view === 'BIG') {
    return (
            <Card
                max
                padding={'24'}
                data-testid={'EndpointItem'}
                border="partial"
                className={classNames(cls.EndpointItem, {}, [className, cls[view]])}
            >
                <AppLink
                    target={target}
                    to={getRouteEndpointEdit(endpoint.id)}
                >
                    <HStack gap={'8'}>
                        <Text bold text={endpoint.username}/>
                    </HStack>
                    <HStack gap={'8'}>
                        <Text text={endpoint.endpoint_id} bold className={cls.title}/>
                        <Text text={endpoint.username} size={'s'}/>
                        {endpoint.group_uid}
                    </HStack>
                </AppLink>
                <div className={cls.footer}></div>
            </Card>
    )
  }

  return (
        <Card
            className={classNames(cls.EndpointItem, {}, [className, cls[view]])}
            border="partial"
            padding="16"
        >
            <VStack className={cls.info} gap={'4'}>
                <AppLink
                    data-testid={'EndpointItem'}
                    target={target}
                    to={getRouteEndpointEdit(endpoint.id)}
                >
                    <Text bold text={endpoint.username}/>
                    <Text text={endpoint.endpoint_id} className={cls.title}/>
                    <Text text={endpoint.username} size={'s'}/>
                    <VStack gap={'4'} className={cls.footer} max>
                        <HStack gap={'4'}>
                            <Text bold text={endpoint.username}/>
                        </HStack>
                    </VStack>
                </AppLink>
            </VStack>
        </Card>
  )
})
