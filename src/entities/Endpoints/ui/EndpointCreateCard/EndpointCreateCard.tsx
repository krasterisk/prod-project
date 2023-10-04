import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCreateCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { Codecs, CodecSelect } from '@/entities/Codecs'
import { EndpointCreateArg } from '../..'
import { EndpointCreateHeader } from '../EndpointCreateHeader/EndpointCreateHeader'

interface EndpointCreateCardProps {
  className?: string
  data?: EndpointCreateArg
  onChangeContext?: (value?: string) => void
  onChangeExtension?: (value?: string) => void
  onChangeTransport?: (value?: string) => void
  onChangeCodecs?: (value?: Codecs) => void
  onChangeMaxContacts?: (value?: string) => void
  onChangeAuthType?: (value?: string) => void
  onCreate?: (data: EndpointCreateArg) => void
}

export const EndpointCreateCard = memo((props: EndpointCreateCardProps) => {
  const {
    className,
    onCreate
  } = props

  const [formFields, setFormFields] = useState<EndpointCreateArg>(
    {
      endpoint_id: '',
      allow: '',
      auth_type: '',
      context: '',
      max_contacts: 0,
      password: '',
      transport: '',
      username: ''
    })

  const { t } = useTranslation('endpoints')

  const createChangeHandler = (field: keyof EndpointCreateArg) => (value: string) => {
    setFormFields({ ...formFields, [field]: value })
  }

  const createHandler = useCallback(() => {
    onCreate?.(formFields)
  }, [formFields, onCreate])

  return (
        <VStack gap={'8'} max className={classNames(cls.EndpointCreateHeader, {}, [className])}>
            <EndpointCreateHeader
                onCreate={createHandler}
                className={cls.EndpointCreateHeader}
            />
            <Card className={cls.EndpointCreateCard} max padding={'8'} border={'partial'}>
                <HStack gap={'24'} max>
                    <VStack gap={'16'}>
                        <Input
                            label={t('Номер') ?? ''}
                            onChange={createChangeHandler('username')}
                            data-testid={'EndpointCard.Extension'}
                            value={formFields.username}
                        />
                        <Input
                            label={t('Контекст') ?? ''}
                            onChange={createChangeHandler('context')}
                            data-testid={'EndpointCard.Context'}
                            value={formFields.context}
                        />
                        <Input
                            label={t('Транспортный протокол') ?? ''}
                            onChange={createChangeHandler('transport')}
                            data-testid={'EndpointCard.Transport'}
                            value={formFields.transport}
                        />
                    </VStack>
                    <VStack gap={'16'}>
                        <Input
                            label={t('Авторизация') ?? ''}
                            onChange={createChangeHandler('auth_type')}
                            data-testid={'EndpointCard.AuthType'}
                            value={formFields.auth_type}
                        />
                        <CodecSelect
                            onChange={createChangeHandler('allow')}
                            data-testid={'EndpointCard.Codecs'}
                        />
                        <Input
                            label={t('Количество одновременных звонков') ?? ''}
                            onChange={createChangeHandler('max_contacts')}
                            data-testid={'EndpointCard.MaxContacts'}
                            value={formFields.max_contacts}
                        />
                    </VStack>
                </HStack>
            </Card>
        </VStack>
  )
})
