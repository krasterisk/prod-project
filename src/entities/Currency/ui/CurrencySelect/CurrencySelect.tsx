import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/Currency'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/redesigned/Popups'

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readonly?: boolean
}

const options = [
  {
    value: Currency.RUB,
    content: Currency.RUB
  },
  {
    value: Currency.EUR,
    content: Currency.EUR
  },
  {
    value: Currency.USD,
    content: Currency.USD
  }
]

export const CurrencySelect = memo(
  ({ className, value, onChange, readonly }: CurrencySelectProps) => {
    const { t } = useTranslation()

    const onChangeHandler = useCallback((value: string) => {
      onChange?.(value as Currency)
    }, [onChange])

    const props = {
      className,
      value,
      defaultValue: String(t('Валюта')),
      items: options,
      label: String(t('Валюта')),
      onChange: onChangeHandler,
      readonly,
      direction: 'top-right' as const
    }

    return (
      <ListBox {...props} />
    )
  })
