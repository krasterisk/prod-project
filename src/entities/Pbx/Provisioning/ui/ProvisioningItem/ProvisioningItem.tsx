import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningItem.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteProvisioningEdit } from '@/shared/const/router'
import { ContentView } from '@/entities/Content'
import { ProvisionTemplate } from '../../model/types/provisionging'

interface ProvisioningItemProps {
  className?: string
  provisionTemplate: ProvisionTemplate
  onEdit?: (id: string) => void
  view?: ContentView
  target?: HTMLAttributeAnchorTarget
}

export const ProvisioningItem = memo((props: ProvisioningItemProps) => {
  const {
    className,
    provisionTemplate,
    view = 'SMALL',
    target
  } = props

  if (view === 'BIG') {
    return (
            <Card
                max
                padding={'24'}
                data-testid={'ProvisioningItem'}
                border="partial"
                className={classNames(cls.ProvisioningItem, {}, [className, cls[view]])}
            >
                <AppLink
                    target={target}
                    to={getRouteProvisioningEdit(provisionTemplate.id)}
                >
                    <HStack gap={'8'}>
                        <Text bold text={provisionTemplate.name}/>
                    </HStack>
                    <HStack gap={'8'}>
                        <Text text={provisionTemplate.name} bold className={cls.title}/>
                        <Text text={provisionTemplate.filename} size={'s'}/>
                        {provisionTemplate.description}
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
                    to={getRouteProvisioningEdit(provisionTemplate.id)}
                >
                    <Text bold text={provisionTemplate.name}/>
                    <Text text={provisionTemplate.filename} className={cls.title}/>
                    <VStack gap={'4'} className={cls.footer} max>
                        <HStack gap={'4'}>
                            <Text bold text={provisionTemplate.description}/>
                        </HStack>
                    </VStack>
                </AppLink>
            </VStack>
        </Card>
  )
})
