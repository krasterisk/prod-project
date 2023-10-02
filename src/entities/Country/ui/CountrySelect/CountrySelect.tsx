import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/Country'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/redesigned/Popups'

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readonly?: boolean
}

const options = [
  {
    value: Country.Armenia,
    content: Country.Armenia
  },
  {
    value: Country.Belarus,
    content: Country.Belarus
  },
  {
    value: Country.Kazakhstan,
    content: Country.Kazakhstan
  },
  {
    value: Country.Ukraine,
    content: Country.Ukraine
  },
  {
    value: Country.Russia,
    content: Country.Russia
  }
]

export const CountrySelect = memo(({ className, value, onChange, readonly }: CountrySelectProps) => {
  const { t } = useTranslation()

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country)
  }, [onChange])

  const props = {
    className,
    items: options,
    value,
    defaultValue: String(t('Страна')),
    label: String(t('Страна')),
    onChange: onChangeHandler,
    readonly,
    direction: 'top-right' as const
  }

  return (
      <ListBox {...props} />
  )
})
