import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupItem.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteEndpointGroupsEdit } from '@/shared/const/router'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { EndpointGroups } from '../../..'
import { ContentView } from '@/entities/Content'

interface EndpointGroupItemProps {
  className?: string
  endpointGroup: EndpointGroups
  onEdit?: (id: string) => void
  view?: ContentView
  target?: HTMLAttributeAnchorTarget
}

export const EndpointGroupItem = memo((props: EndpointGroupItemProps) => {
  const {
    className,
    endpointGroup,
    view = 'SMALL',
    target
  } = props

  if (view === 'BIG') {
    return (
            <Card
                max
                padding={'24'}
                data-testid={'EndpointGroupListItem'}
                border="partial"
                className={classNames(cls.EndpointGroupItem, {}, [className, cls[view]])}
            >
                <AppLink
                    target={target}
                    to={getRouteEndpointGroupsEdit(endpointGroup.id)}
                >
                    <HStack gap={'8'}>
                        <Text bold text={endpointGroup.name}/>
                    </HStack>
                    <HStack gap={'8'}>
                        <Text text={endpointGroup.description} size={'s'}/>
                    </HStack>
                </AppLink>
                <div className={cls.footer}></div>
            </Card>
    )
  }

  return (
        <Card
            className={classNames(cls.EndpointGroupItem, {}, [className, cls[view]])}
            border="partial"
            padding="16"
        >
            <VStack className={cls.info} gap={'4'}>
                <AppLink
                    data-testid={'ContextItem'}
                    target={target}
                    to={getRouteEndpointGroupsEdit(endpointGroup.id)}
                >
                    <Text bold text={endpointGroup.name}/>
                    <Text text={endpointGroup.description} className={cls.title}/>
                    <VStack gap={'4'} className={cls.footer} max>
                        <HStack gap={'4'}>
                            <Text bold text={endpointGroup.description}/>
                        </HStack>
                    </VStack>
                </AppLink>
            </VStack>
        </Card>
  )
})
