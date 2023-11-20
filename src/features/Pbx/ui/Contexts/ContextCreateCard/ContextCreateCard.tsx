import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextCreateCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback, useState } from 'react'
import { ContextCreateHeader } from '../ContextCreateHeader/ContextCreateHeader'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { Input } from '@/shared/ui/redesigned/Input'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { ContextSelect } from '../ContextSelect/ContextSelect'
import { Context } from '@/entities/Pbx'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { SerializedError } from '@reduxjs/toolkit'

interface ContextCreateCardProps {
  className?: string
  onCreate?: (data: Context) => void
  isError?: boolean
  error?: FetchBaseQueryError | SerializedError | undefined
}

export const ContextCreateCard = memo((props: ContextCreateCardProps) => {
  const {
    className,
    onCreate,
    isError,
    error
  } = props

  const userData = useSelector(getUserAuthData)
  const vpbx_user_id = userData?.vpbx_user_id || '0'

  const { t } = useTranslation('endpoints')

  const initContext = {
    id: 'LIST',
    name: 'sip-out',
    includes: '',
    description: '',
    vpbx_user_id
  }

  const [formFields, setFormFields] = useState<Context>(initContext)

  const createChangeHandler = useCallback((field: keyof Context) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }, [formFields])

  const createHandler = useCallback(() => {
    onCreate?.(formFields)
  }, [formFields, onCreate])

  return (
        <VStack gap={'8'} max className={classNames(cls.ContextCreateCard, {}, [className])}>
            <ContextCreateHeader onCreate={createHandler}/>
            { isError
              ? <ErrorGetData
                    title={t('Ошибка при создании контекста') || ''}
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
                            label={t('Наименование контекста') ?? ''}
                            onChange={createChangeHandler('name')}
                            data-testid={'ContextCard.name'}
                            value={formFields.name}
                        />
                        <Input
                            label={t('Описание контекста') ?? ''}
                            onChange={createChangeHandler('description')}
                            data-testid={'ContextCard.description'}
                            value={formFields.description}
                        />
                        <ContextSelect
                            label={t('Включить') ?? ''}
                            data-testid={'ContextCard.includes'}
                            onChange={createChangeHandler('includes')}
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
