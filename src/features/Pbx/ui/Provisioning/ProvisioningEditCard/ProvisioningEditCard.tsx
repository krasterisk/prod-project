import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningEditCard.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { ProvisionTemplate } from '@/entities/Pbx'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { ProvisioningEditHeader } from '../ProvisioningEditHeader/ProvisioningEditHeader'
import { useGetProvision } from '../../../../../pages/pbx/ProvisioningPage/api/provisioningApi'

interface ProvisioningEditCardProps {
  className?: string
  onEdit?: (data: ProvisionTemplate) => void
  onDelete?: (id: string) => void
  provisioningId?: string
}

export const ProvisioningEditCard = memo((props: ProvisioningEditCardProps) => {
  const {
    className,
    onEdit,
    provisioningId,
    onDelete
  } = props

  const { t } = useTranslation('endpoints')
  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const { data, isError, isLoading, error } = useGetProvision(provisioningId!)

  const initProvisioning = {
    id: 'LIST',
    name: '',
    filename: '',
    description: '',
    vpbx_user_id
  }

  const [formFields, setFormFields] = useState<ProvisionTemplate>(data || initProvisioning)

  const editHandler = useCallback(() => {
    onEdit?.(formFields)
  }, [formFields, onEdit])

  const editChangeHandler = (field: keyof ProvisionTemplate) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }

  useEffect(() => {
    if (data) {
      setFormFields(data)
    }
  }, [data])

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
        <VStack gap={'8'} max className={classNames(cls.ProvisioningEditCard, {}, [className])}>
            <ProvisioningEditHeader
                onEdit={editHandler}
                onDelete={onDelete}
                provisioningId={provisioningId}
            />
            {isError
              ? <ErrorGetData
                    title={t('Ошибка при сохранении шаблона') || ''}
                    text={
                        error &&
                        String(t('Проверьте заполняемые поля и повторите ещё раз'))
                    }
                />
              : ''
            }
            <Card max padding={'8'} border={'partial'}>
                <HStack gap={'24'} max>
                    <VStack gap={'16'}>
                        <Input
                            label={t('Наименование шаблона') ?? ''}
                            onChange={editChangeHandler('name')}
                            data-testid={'ProvisioningEditCard.name'}
                            value={formFields.name}
                        />

                        <Input
                            label={t('Файл шаблона') ?? ''}
                            onChange={editChangeHandler('filename')}
                            data-testid={'ProvisioningEditCard.filename'}
                            value={formFields.filename}
                        />

                        <Input
                            label={t('Описание контекста') ?? ''}
                            onChange={editChangeHandler('description')}
                            data-testid={'ProvisioningEditCard.description'}
                            value={formFields.description}
                        />
                    </VStack>
                </HStack>
            </Card>
        </VStack>
  )
})
