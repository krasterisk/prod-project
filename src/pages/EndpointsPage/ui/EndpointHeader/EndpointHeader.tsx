import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { Button } from '@/shared/ui/redesigned/Button'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteEndpointCreate } from '@/shared/const/router'

interface EndpointHeaderProps {
  className?: string
}

export const EndpointHeader = memo((props: EndpointHeaderProps) => {
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
                  title={t('Создать одного') ?? ''}
                  variant={'outline'}>
                  {t('Создать одного')}
              </Button>
          </AppLink>
        </Card>
  )
})
