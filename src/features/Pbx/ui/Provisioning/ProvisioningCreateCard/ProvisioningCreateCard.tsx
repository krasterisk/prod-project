import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ProvisioningCreateCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { ProvisionTemplate } from '@/entities/Pbx'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import {
  ProvisioningCreateHeader
} from '../ProvisioningCreateHeader/ProvisioningCreateHeader'

interface ProvisioningCreateCardProps {
  className?: string
  onCreate?: (data: ProvisionTemplate) => void
  isError?: boolean
  error?: FetchBaseQueryError | SerializedError | undefined
}

export const ProvisioningCreateCard = memo((props: ProvisioningCreateCardProps) => {
  const {
    className,
    onCreate,
    isError,
    error
  } = props

  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const { t } = useTranslation('endpoints')

  const initTemplate = {
    id: 'LIST',
    name: '',
    filename: '',
    description: '',
    vpbx_user_id
  }

  const [formFields, setFormFields] = useState<ProvisionTemplate>(initTemplate)

  const createChangeHandler = useCallback((field: keyof ProvisionTemplate) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }, [formFields])

  const createHandler = useCallback(() => {
    onCreate?.(formFields)
  }, [formFields, onCreate])

  return (
      <VStack gap={'8'} max className={classNames(cls.ProvisioningCreateCard, {}, [className])}>
        <ProvisioningCreateHeader onCreate={createHandler}/>
        { isError
          ? <ErrorGetData
                title={t('Ошибка при создании шаблона') || ''}
                text={
                  error && 'data' in error
                    ? String(t((error.data as { message: string }).message))
                    : String(t('Проверьте заполняемые поля и повторите ещё раз'))
                }
            />
          : ''}
        <Card max padding={'8'} border={'partial'}>
          <HStack gap={'24'} max>
            <VStack gap={'16'}>
              <Input
                  label={t('Наименование шаблона') ?? ''}
                  onChange={createChangeHandler('name')}
                  data-testid={'ProvisionCreateCard.name'}
                  value={formFields.name}
              />
              <Input
                  label={t('Файл шаблона') ?? ''}
                  onChange={createChangeHandler('filename')}
                  data-testid={'ProvisionCreateCard.filename'}
                  value={formFields.filename}
              />
              <Input
                  label={t('Описание шаблона') ?? ''}
                  onChange={createChangeHandler('description')}
                  data-testid={'ProvisionCreateCard.description'}
                  value={formFields.description}
              />
            </VStack>
          </HStack>
        </Card>
      </VStack>
  )
})
