import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Currency } from '../../model/types/Currency'
import { memo, useCallback } from 'react'
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox'

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

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const { t } = useTranslation()

    const {
        className,
        value = '',
        onChange,
        readonly
    } = props

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            defaultValue={String(t('Валюта'))}
            items={options}
            label={String(t('Валюта'))}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
            direction='top-right'
        />
    )
})
