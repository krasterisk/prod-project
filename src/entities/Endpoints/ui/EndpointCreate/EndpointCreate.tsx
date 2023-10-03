import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCreate.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Codecs, CodecSelect } from '../../../Codecs'
import { EndpointCreateHeader } from '../EndpointCreateHeader/EndpointCreateHeader'
import { EndpointCreateArg } from '../../model/types/endpoints'

export interface EndpointCreateProps {
  data?: EndpointCreateArg
  className?: string
  onChangeContext?: (value?: string) => void
  onChangeExtension?: (value?: string) => void
  onChangeTransport?: (value?: string) => void
  onChangeCodecs?: (value?: Codecs) => void
  onChangeMaxContacts?: (value?: string) => void
  onChangeAuthType?: (value?: string) => void
  onCreate?: (data: EndpointCreateArg) => void
}

export const EndpointCreate = memo((props: EndpointCreateProps) => {
  const {
    className,
    onChangeExtension,
    onChangeAuthType,
    onChangeCodecs,
    onChangeContext,
    onChangeMaxContacts,
    onChangeTransport,
    onCreate
  } = props

  const { t } = useTranslation('endpoints')

  return (
        <VStack gap={'8'} max className={classNames(cls.EndpointCreateHeader, {}, [className])}>
            <EndpointCreateHeader
                onCreate={onCreate}
                className={cls.EndpointCreateHeader}
            />
            <Card className={cls.EndpointCreate} max padding={'8'} border={'partial'}>
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
                                label={t('Транспортный протокол') ?? ''}
                                onChange={onChangeTransport}
                                data-testid={'EndpointCard.Transport'}
                            />
                            <Input
                                label={t('Авторизация') ?? ''}
                                onChange={onChangeAuthType}
                                data-testid={'EndpointCard.AuthType'}
                            />
                            <CodecSelect
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
        </VStack>
  )
})
