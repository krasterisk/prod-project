import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsListHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import {
  getRouteEndpointGroupsCreate,
  getRouteEndpoints
} from '@/shared/const/router'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface EndpointGroupsListHeaderProps {
  className?: string
}

export const EndpointGroupsListHeader = memo((props: EndpointGroupsListHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('endpoints')

  return (
      <Card
          className={classNames(cls.EndpointGroupsListHeader, {}, [className])}
          padding={'8'}
          border={'partial'}
          max
      >
        <HStack gap={'16'} justify={'start'} max>
          <AppLink
              to={getRouteEndpointGroupsCreate()}
          >
            <Button
                title={t('Создать') ?? ''}
                variant={'outline'}>
              {t('Создать')}
            </Button>
          </AppLink>
          <AppLink
              to={getRouteEndpoints()}
          >
            <Button
                title={t('Абоненты') ?? ''}
                variant={'outline'}>
              {t('Абоненты')}
            </Button>
          </AppLink>
        </HStack>
      </Card>
  )
})
