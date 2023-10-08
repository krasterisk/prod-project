import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointCreateCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { CodecSelect } from '@/entities/Codecs'
import { EndpointCreateHeader } from '../../ui/EndpointCreateHeader/EndpointCreateHeader'
import { Endpoint } from '../../model/types/endpoints'
import { useNavigate } from 'react-router-dom'

interface EndpointCreateCardProps {
  className?: string
  onCreate?: (data: Endpoint) => void
}

export const EndpointCreateCard = memo((props: EndpointCreateCardProps) => {
  const {
    className,
    onCreate
  } = props

  const initEndpoint = {
    endpoint_id: 'TEST',
    allow: 'alaw',
    auth_type: 'userpass',
    context: '',
    max_contacts: 0,
    password: '123',
    transport: 'udp',
    username: '',
    vpbx_user_id: '0'
  }
  const [formFields, setFormFields] = useState<Endpoint>(initEndpoint)

  const { t } = useTranslation('endpoints')
  const navigate = useNavigate()

  const createChangeHandler = (field: keyof Endpoint) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }

  const createHandler = useCallback(() => {
    onCreate?.(formFields)
  }, [formFields, navigate, onCreate])

  return (
        <VStack gap={'8'} max className={classNames(cls.EndpointCreateCard, {}, [className])}>
            <EndpointCreateHeader onCreate={createHandler}/>
            <Card max padding={'8'} border={'partial'}>
                <HStack gap={'24'} max>
                    <VStack gap={'16'}>
                        <Input
                            label={t('Номер') ?? ''}
                            onChange={createChangeHandler('endpoint_id')}
                            data-testid={'EndpointCard.endpoint_id'}
                            value={formFields.endpoint_id}
                        />
                        <Input
                            label={t('Имя пользователя') ?? ''}
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
                            value={formFields.allow}
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
