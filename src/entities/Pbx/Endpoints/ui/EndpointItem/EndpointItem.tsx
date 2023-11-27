import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointItem.module.scss'
import { useTranslation } from 'react-i18next'
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
  const { t } = useTranslation()

  const userInfo = (
        <>
            <Text bold text={endpoint.username}/>
        </>
  )

  if (view === 'BIG') {
    return (
            <Card
                max
                padding={'24'}
                data-testid={'ManualListItem'}
                className={classNames(cls.EndpointItem, {}, [className, cls[view]])}
            >
                <VStack max gap={'16'}>
                    <HStack gap={'8'}>
                        {userInfo}
                    </HStack>
                    <Text text={endpoint.id + '. ' + endpoint.endpoint_id} bold className={cls.title}/>
                    <Text text={endpoint.username} size={'s'}/>
                    {endpoint.group_uid}
                    <HStack max justify={'between'}>
                        <AppLink
                            target={target}
                            to={getRouteEndpointEdit(endpoint.id)}
                        >
                        </AppLink>
                    </HStack>
                </VStack>

                <div className={cls.footer}>

                </div>
            </Card>
    )
  }

  return (
        <AppLink
            data-testid={'ManualListItem'}
            target={target}
            className={classNames(cls.EndpointItem, {}, [className, cls[view]])}
            to={getRouteEndpointEdit(endpoint.id)}
        >
            <Card className={cls.card} border="partial" padding="0">
                <VStack className={cls.info} gap={'4'}>
                    <Text text={endpoint.id + '. ' + endpoint.endpoint_id} className={cls.title}/>
                    <Text text={endpoint.username} size={'s'}/>
                    <VStack gap={'4'} className={cls.footer} max>
                        <HStack gap={'4'}>{userInfo}</HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
  )
})
