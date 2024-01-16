import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsEditCard.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { EndpointGroups } from '@/entities/Pbx'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { useEndpointGroup } from '../../../../../pages/pbx/EndpointGroupsPage/api/endpointGroupsApi'
import { EndpointGroupsEditHeader } from '../EndpointGroupsEditHeader/EndpointGroupsEditHeader'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'

interface EndpointEditGroupCardProps {
  className?: string
  onEdit?: (data: EndpointGroups) => void
  onDelete?: (id: string) => void
  endpointGroupId?: string
}

export const EndpointGroupsEditCard = memo((props: EndpointEditGroupCardProps) => {
  const {
    className,
    onEdit,
    endpointGroupId,
    onDelete
  } = props

  const { t } = useTranslation('endpoints')
  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const { data, isError, isLoading, error } = useEndpointGroup(endpointGroupId!)

  const initEndpointGroup = {
    id: 'LIST',
    name: '',
    description: '',
    vpbx_user_id
  }

  const [formFields, setFormFields] = useState<EndpointGroups>(data || initEndpointGroup)

  const editHandler = useCallback(() => {
    onEdit?.(formFields)
  }, [formFields, onEdit])

  const editChangeHandler = (field: keyof EndpointGroups) => (value: string) => {
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
      <VStack gap={'8'} max className={classNames(cls.EndpointGroupEditCard, {}, [className])}>
        <EndpointGroupsEditHeader onEdit={editHandler} onDelete={onDelete} endpointGroupId={endpointGroupId}/>
        {isError
          ? <ErrorGetData
                title={t('Ошибка при сохранении группы абонентов') || ''}
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
                  label={t('Наименование группы') ?? ''}
                  onChange={editChangeHandler('name')}
                  data-testid={'EndpointCard.name'}
                  value={formFields.name}
              />
              <Input
                  label={t('Описание группы') ?? ''}
                  onChange={editChangeHandler('description')}
                  data-testid={'EndpointCard.Description'}
                  value={formFields.description}
              />
            </VStack>
          </HStack>
        </Card>
      </VStack>
  )
})
