import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointEditCard.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { CodecSelect } from '../../../../CodecSelect'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ContextSelect } from '../../Contexts/ContextSelect/ContextSelect'
import { Endpoint } from '@/entities/Pbx'
import { useEndpoint } from '../../../api/endpointsApi'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { EndpointEditHeader } from '../EndpointEditHeader/EndpointEditHeader'

interface EndpointEditCardProps {
  className?: string
  isError?: boolean
  onEdit?: (data: Endpoint) => void
  endpointId?: string
  error?: FetchBaseQueryError | SerializedError | undefined
}

export const EndpointEditCard = memo((props: EndpointEditCardProps) => {
  const {
    className,
    onEdit,
    endpointId
  } = props

  const { t } = useTranslation('endpoints')

  const { data, isError, isLoading, error } = useEndpoint(endpointId!)

  const initEndpoint = {
    endpoint_id: '',
    allow: '',
    auth_type: 'userpass',
    context: '',
    max_contacts: 0,
    password: '',
    transport: 'udp',
    username: '',
    vpbx_user_id: '0'
  }

  const [formFields, setFormFields] = useState<Endpoint>(data || initEndpoint)

  const editHandler = useCallback(() => {
    onEdit?.(formFields)
  }, [formFields, onEdit])

  const editChangeHandler = (field: keyof Endpoint) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }

  if (isError) {
    return (
            <ErrorGetData/>
    )
  }

  if (isLoading) {
    return (
            <VStack gap={'16'} max>
                <Card max>
                    <Skeleton width='100%' border='8px' height='44px'/>
                </Card>
                <Skeleton width='100%' border='8px' height='80px'/>
                <Skeleton width='100%' border='8px' height='80px'/>
                <Skeleton width='100%' border='8px' height='80px'/>
            </VStack>
    )
  }

  return (
            <VStack gap={'8'} max className={classNames(cls.EndpointEditCard, {}, [className])}>
                <EndpointEditHeader onEdit={editHandler}/>
                {isError
                  ? <ErrorGetData
                        title={t('Ошибка при сохранении абонента') || ''}
                        text={
                            error &&
                              String(t('Проверьте заполняемые поля и повторите ещё раз'))
                        }
                    />
                  : ''}
                <Card max padding={'8'} border={'partial'}>
                    <HStack gap={'24'} max>
                        <VStack gap={'16'}>
                            <Input
                                label={t('Номер') ?? ''}
                                onChange={editChangeHandler('endpoint_id')}
                                data-testid={'EndpointCard.endpoint_id'}
                                value={formFields.endpoint_id}
                            />
                            <Input
                                label={t('Имя пользователя') ?? ''}
                                onChange={editChangeHandler('username')}
                                data-testid={'EndpointCard.Username'}
                                value={formFields.username}
                            />
                            <ContextSelect
                                data-testid={'EndpointCard.Context'}
                                onChange={editChangeHandler('context')}
                                value={formFields.context}
                            />
                            <Input
                                label={t('Транспортный протокол') ?? ''}
                                onChange={editChangeHandler('transport')}
                                data-testid={'EndpointCard.Transport'}
                                value={formFields.transport}
                            />
                        </VStack>
                        <VStack gap={'16'}>
                            <Input
                                label={t('Авторизация') ?? ''}
                                onChange={editChangeHandler('auth_type')}
                                data-testid={'EndpointCard.AuthType'}
                                value={formFields.auth_type}
                            />
                            <CodecSelect
                                data-testid={'EndpointCard.CodecSelect'}
                                onChange={editChangeHandler('allow')}
                                value={formFields.allow}
                                defaultValue={String(t('Выбрать...'))}
                            />
                            <Input
                                label={t('Количество одновременных звонков') ?? ''}
                                onChange={editChangeHandler('max_contacts')}
                                data-testid={'EndpointCard.MaxContacts'}
                                value={formFields.max_contacts}
                            />
                        </VStack>
                    </HStack>
                </Card>
            </VStack>
  )
})
