import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsListHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteContexts, getRouteEndpointCreate } from '@/shared/const/router'

interface EndpointsListHeaderProps {
  className?: string
}

export const EndpointsListHeader = memo((props: EndpointsListHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('endpoints')

  return (
      <Card
            className={classNames(cls.EndpointHeader, {}, [className])}
            padding={'8'}
            border={'partial'}
        >
          <AppLink
              to={getRouteEndpointCreate()}
          >
              <Button
                  title={t('Создать') ?? ''}
                  variant={'outline'}>
                  {t('Создать')}
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
              to={''}
          >
              <Button
                  title={t('Группы') ?? ''}
                  variant={'outline'}>
                  {t('Группы')}
              </Button>
          </AppLink>

        </Card>
  )
})
