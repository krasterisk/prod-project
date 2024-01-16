import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextsListHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteContextCreate, getRouteEndpoints } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'

interface ContextsListHeaderProps {
  className?: string
}

export const ContextsListHeader = memo((props: ContextsListHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.ContextsListHeader, {}, [className])}
            padding={'8'}
            border={'partial'}
            max
        >
            <AppLink
                to={getRouteContextCreate()}
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
        </Card>
  )
})
