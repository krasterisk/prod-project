import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextEditCard.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Context } from '@/entities/Pbx'
import { useGetContext } from '../../../../../pages/pbx/ContextsPage/api/contextsApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { ContextSelect } from '../ContextSelect/ContextSelect'
import { ContextEditHeader } from '../ContextEditHeader/ContextEditHeader'

interface ContextEditCardProps {
  className?: string
  onEdit?: (data: Context) => void
  onDelete?: (id: string) => void
  contextId?: string
}

export const ContextEditCard = memo((props: ContextEditCardProps) => {
  const {
    className,
    onEdit,
    contextId,
    onDelete
  } = props

  const { t } = useTranslation('endpoints')
  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const { data, isError, isLoading, error } = useGetContext(contextId!)

  const initContext = {
    id: 'LIST',
    name: 'sip-out',
    includes: '',
    description: '',
    vpbx_user_id
  }

  const [formFields, setFormFields] = useState<Context>(data || initContext)

  const editHandler = useCallback(() => {
    onEdit?.(formFields)
  }, [formFields, onEdit])

  const editChangeHandler = (field: keyof Context) => (value: string) => {
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
            <ContextEditHeader
                onEdit={editHandler}
                onDelete={onDelete}
                contextId={contextId}
            />
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
                            label={t('Наименование контекста') ?? ''}
                            onChange={editChangeHandler('name')}
                            data-testid={'ContextCard.name'}
                            value={formFields.name}
                        />
                        <Input
                            label={t('Описание контекста') ?? ''}
                            onChange={editChangeHandler('description')}
                            data-testid={'ContextCard.description'}
                            value={formFields.description}
                        />
                        <ContextSelect
                            label={t('Включить') ?? ''}
                            data-testid={'ContextCard.includes'}
                            onChange={editChangeHandler('includes')}
                            value={formFields.includes}
                            defaultValue={String(t('Выбрать...'))}
                            multiple
                        />
                    </VStack>
                </HStack>
            </Card>
        </VStack>
  )
})
