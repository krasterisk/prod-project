import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCreate.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { EndpointCardProps } from '../EndpointCard/EndpointCard'

export const EndpointCreate = memo((props: EndpointCardProps) => {
  const {
    className,
    onChangeExtension,
    onChangeAuthType,
    onChangeCodecs,
    onChangeContext,
    onChangeMaxContacts,
    onChangeTransport
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <Card
            className={classNames(cls.EndpointCreate, {}, [className])}
            padding={'24'}
            max
            border={'partial'}
        >
            <VStack gap={'32'}>
                <HStack gap={'24'} max>
                    <VStack gap={'16'} max>
                        <Input
                            label={t('Номер') ?? ''}
                            onChange={onChangeExtension}
                            data-testid={'EndpointCard.Extension'}
                        />
                        <Input
                            label={t('Контекст') ?? ''}
                            onChange={onChangeContext}
                            data-testid={'EndpointCard.Context'}
                        />
                        <Input
                            label={t('Авторизация') ?? ''}
                            onChange={onChangeAuthType}
                            data-testid={'EndpointCard.AuthType'}
                        />
                        <Input
                            label={t('Кодеки') ?? ''}
                            onChange={onChangeCodecs}
                            data-testid={'EndpointCard.Codecs'}
                        />
                        <Input
                            label={t('Количество одновременных звонков') ?? ''}
                            onChange={onChangeMaxContacts}
                            data-testid={'EndpointCard.MaxContacts'}
                        />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
  )
})
