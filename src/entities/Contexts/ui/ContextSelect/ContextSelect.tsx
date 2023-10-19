import { ListBox } from '@/shared/ui/redesigned/Popups'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useGetContexts } from '../../api/contextApi'
import { Contexts } from '../../model/Contexts'

interface ContextsSelectProps {
  className?: string
  value?: string
  onChange?: (value: Contexts) => void
  readonly?: boolean
}

export const ContextSelect = memo(({ className, value, onChange, readonly }: ContextsSelectProps) => {
  const { t } = useTranslation()

  const {
    data,
    isLoading
  } = useGetContexts({ vpbx_user_id: '0' })

  const options = data?.map(item => ({
    value: item.name,
    content: item.name
  }))

  // const onChangeHandler = useCallback((value: string) => {
  //   onChange?.(value as Contexts)
  // }, [onChange])

  const contextProps = {
    className,
    items: options,
    value,
    key: value,
    defaultValue: String(t('Выбрать...')),
    label: String(t('Контекст')),
    // onChange: onChangeHandler,
    readonly,
    multiple: true,
    direction: 'bottom-right' as const
  }
  return (
        <ListBox {...contextProps} />
  )
})
