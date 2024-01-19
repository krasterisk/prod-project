import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningCreateHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack } from '@/shared/ui/redesigned/Stack'
import { Text } from '@/shared/ui/redesigned/Text'
import { AppLink } from '@/shared/ui/redesigned/AppLink'
import { getRouteProvisioning } from '@/shared/const/router'
import { Button } from '@/shared/ui/redesigned/Button'

interface ProvisioningCreateHeaderProps {
  className?: string
  onCreate?: () => void
}

export const ProvisioningCreateHeader = memo((props: ProvisioningCreateHeaderProps) => {
  const {
    className,
    onCreate
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.ProvisioningCreateHeader, {}, [className])}
            padding={'8'}
            border={'partial'}
            max
        >
            <HStack max justify={'start'}>
                <Text title={t('Новый шаблон')} />
            </HStack>
            <HStack gap="24">
                <AppLink
                    to={getRouteProvisioning()}
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
