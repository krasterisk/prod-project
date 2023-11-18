import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsCreateCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { Card } from '@/shared/ui/redesigned/Card'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Input } from '@/shared/ui/redesigned/Input'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { EndpointGroups } from '@/entities/Pbx'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'
import { EndpointGroupsCreateHeader } from '../EndpointGroupsCreateHeader/EndpointGroupsCreateHeader'

interface EndpointGroupsCreateCardProps {
  className?: string
  onCreate?: (data: EndpointGroups) => void
  isError?: boolean
  error?: FetchBaseQueryError | SerializedError | undefined
}

export const EndpointGroupsCreateCard = memo((props: EndpointGroupsCreateCardProps) => {
  const {
    className,
    onCreate,
    isError,
    error
  } = props

  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const initEndpointGroup = {
    id: 'LIST',
    name: '',
    description: '',
    vpbx_user_id
  }
  const [formFields, setFormFields] = useState<EndpointGroups>(initEndpointGroup)

  const { t } = useTranslation('endpoints')

  const createChangeHandler = (field: keyof EndpointGroups) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }

  const createHandler = useCallback(() => {
    onCreate?.(formFields)
  }, [formFields, onCreate])

  return (
      <VStack gap={'8'} max className={classNames(cls.EndpointCreateCard, {}, [className])}>
        <EndpointGroupsCreateHeader onCreate={createHandler}/>
        { isError
          ? <ErrorGetData
                title={t('Ошибка при создании группы абонентов') || ''}
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
                  label={t('Наименование группы') ?? ''}
                  onChange={createChangeHandler('name')}
                  data-testid={'EndpointCard.name'}
                  value={formFields.name}
              />
              <Input
                  label={t('Описание группы') ?? ''}
                  onChange={createChangeHandler('description')}
                  data-testid={'EndpointCard.Description'}
                  value={formFields.description}
              />
            </VStack>
          </HStack>
        </Card>
      </VStack>
  )
})
