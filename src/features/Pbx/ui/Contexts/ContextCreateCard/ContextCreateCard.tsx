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

interface ContextCreateCardProps {
  className?: string
  onCreate?: (data: Context) => void
  isError?: boolean
}

export const ContextCreateCard = memo((props: ContextCreateCardProps) => {
  const {
    className,
    onCreate,
    isError
  } = props

  const { t } = useTranslation('endpoints')

  const initContext = {
    name: 'sip-out',
    includes: '',
    description: '',
    vpbx_user_id: '0'
  }

  const [formFields, setFormFields] = useState<Context>(initContext)

  const createChangeHandler = (field: keyof Context) => (value: string) => {
    setFormFields({
      ...formFields,
      [field]: value
    })
  }

  const createHandler = useCallback(() => {
    console.log(formFields)
    onCreate?.(formFields)
  }, [formFields, onCreate])

  return (
        <VStack gap={'8'} max className={classNames(cls.ContextCreateCard, {}, [className])}>
            <ContextCreateHeader onCreate={createHandler}/>
            { isError
              ? <ErrorGetData
                    title={t('Ошибка в параметрах контекста') || ''}
                    text={t('Проверьте заполняемые поля и повторите ещё раз') || ''}
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
                            label={'Включить'}
                            data-testid={'ContextCard.includes'}
                            onChange={createChangeHandler('includes')}
                            value={formFields.includes}
                        />
                    </VStack>
                </HStack>
            </Card>
        </VStack>
  )
})
