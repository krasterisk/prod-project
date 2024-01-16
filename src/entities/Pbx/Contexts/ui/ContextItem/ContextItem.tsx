import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextItem.module.scss'
import { HTMLAttributeAnchorTarget, memo } from 'react'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteContextEdit } from '@/shared/const/router'
import { ContentView } from '@/entities/Content'
import { Context } from '../../model/types/contexts'

interface ContextItemProps {
  className?: string
  context: Context
  onEdit?: (id: string) => void
  view?: ContentView
  target?: HTMLAttributeAnchorTarget
}

export const ContextItem = memo((props: ContextItemProps) => {
  const {
    className,
    context,
    view = 'SMALL',
    target
  } = props

  if (view === 'BIG') {
    return (
            <Card
                max
                padding={'24'}
                data-testid={'ContextListItem'}
                border="partial"
                className={classNames(cls.ContextItem, {}, [className, cls[view]])}
            >
                <AppLink
                    target={target}
                    to={getRouteContextEdit(context.id)}
                >
                    <HStack gap={'8'}>
                        <Text bold text={context.name}/>
                    </HStack>
                    <HStack gap={'8'}>
                        <Text text={context.description} size={'s'}/>
                        <Text text={context.includes} size={'s'}/>
                    </HStack>
                </AppLink>
                <div className={cls.footer}></div>
            </Card>
    )
  }

  return (
        <Card
            className={classNames(cls.ContextItem, {}, [className, cls[view]])}
            border="partial"
            padding="16"
        >
            <VStack className={cls.info} gap={'4'}>
                <AppLink
                    data-testid={'ContextItem'}
                    target={target}
                    to={getRouteContextEdit(context.id)}
                >
                    <Text bold text={context.name}/>
                    <Text text={context.description} className={cls.title}/>
                    <VStack gap={'4'} className={cls.footer} max>
                        <HStack gap={'4'}>
                            <Text bold text={context.includes}/>
                        </HStack>
                    </VStack>
                </AppLink>
            </VStack>
        </Card>
  )
})
