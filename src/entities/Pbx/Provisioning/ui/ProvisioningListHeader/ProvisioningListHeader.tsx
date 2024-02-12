import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningListHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import {
  getRouteContexts,
  getRouteEndpointGroups, getRouteEndpoints,
  getRouteProvisioningCreate
} from '@/shared/const/router'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface ProvisioningListHeaderProps {
  className?: string
}

export const ProvisioningListHeader = memo((props: ProvisioningListHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('endpoints')

  return (
      <Card
          className={classNames(cls.ProvisioningListHeader, {}, [className])}
          padding={'16'}
          border={'partial'}
          max
      >
        <HStack justify={'start'} max gap={'8'}>
          <AppLink
              to={getRouteProvisioningCreate()}
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
          <AppLink
              to={getRouteContexts()}
          >
            <Button
                title={t('Контекcты') ?? ''}
                variant={'outline'}>
              {t('Контекcты')}
            </Button>
          </AppLink>
          <AppLink
              to={getRouteEndpointGroups()}
          >
            <Button
                title={t('Группы') ?? ''}
                variant={'outline'}>
              {t('Группы')}
            </Button>
          </AppLink>
        </HStack>
      </Card>
  )
})
