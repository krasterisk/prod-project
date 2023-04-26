import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Country } from '../../model/types/Country'
import { memo, useCallback } from 'react'
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox'

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

export const CountrySelect = memo((props: CountrySelectProps) => {
    const { t } = useTranslation()

    const {
        className,
        value = '',
        onChange,
        readonly
    } = props

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country)
    }, [onChange])

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={options}
            value={value}
            defaultValue={String(t('Страна'))}
            label={String(t('Страна'))}
            onChange={onChangeHandler}
            readonly={readonly}
            direction='bottom-right'

        />
    )
})
