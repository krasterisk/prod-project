import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCreateHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteEndpoints } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'
import { Text } from '@/shared/ui/redesigned/Text'
import { HStack } from '@/shared/ui/redesigned/Stack'

interface EndpointCreateHeaderProps {
  className?: string
  onCreate?: () => void
}

export const EndpointCreateHeader = memo((props: EndpointCreateHeaderProps) => {
  const {
    className,
    onCreate
  } = props
  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.EndpointCreateHeader, {}, [className])}
            padding={'8'}
            border={'partial'}
            max
        >
            <HStack max justify={'start'}>
                <Text title={t('Новый абонент')}/>
            </HStack>
            <HStack gap="24">
                <AppLink
                    to={getRouteEndpoints()}
                >
                    <Button
                        title={t('Закрыть') ?? ''}
                        variant={'outline'}
                        color={'error'}
                    >
                        {t('Закрыть')}
                    </Button>
                </AppLink>
                <AppLink
                    to={getRouteEndpoints()}
                >
                    <Button
                        title={t('Создать') ?? ''}
                        variant={'outline'}
                        color={'success'}
                        onClick={onCreate}
                    >
                        {t('Создать')}
                    </Button>
                </AppLink>
            </HStack>
        </Card>
  )
})
