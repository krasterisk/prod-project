import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextCreateHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteContexts } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'

interface ContextCreateHeaderProps {
  className?: string
  onCreate?: () => void
}

export const ContextCreateHeader = memo((props: ContextCreateHeaderProps) => {
  const {
    className,
    onCreate
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.ContextCreateHeader, {}, [className])}
            padding={'8'}
            border={'partial'}
            max
        >
            <HStack max justify={'start'}>
                <Text title={t('Новый контекст')} />
            </HStack>
            <HStack gap="24">
                <AppLink
                    to={getRouteContexts()}
                >
                    <Button
                        title={t('Закрыть') ?? ''}
                        variant={'outline'}
                        color={'error'}
                    >
                        {t('Закрыть')}
                    </Button>
                </AppLink>
                <Button
                    title={t('Создать') ?? ''}
                    variant={'outline'}
                    color={'success'}
                    onClick={onCreate}
                >
                    {t('Создать')}
                </Button>
            </HStack>
        </Card>
  )
})
