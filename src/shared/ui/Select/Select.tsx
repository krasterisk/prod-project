import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, useMemo } from 'react'

export interface SelectOptions<T extends string> {
    value: T
    content: string
}

interface SelectProps<T extends string> {
    className?: string
    label?: string | null
    options?: Array<SelectOptions<T>>
    value?: T
    onChange?: (value: T) => void
    readonly?: boolean
}

export const Select = <T extends string> (props: SelectProps<T>) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T)
    }
    const optionsList = useMemo(() => {
        return options?.map(opt => (
            <option
                key={opt.value}
                className={cls.option}
                value={opt.value}
            >
                {opt.content}
            </option>
        ))
    }, [options])

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <div className={classNames(cls.Wrapper, mods, [className])}>
            {label && (
                <span
                    className={cls.label}
                >
                    {`${label}>`}
                </span>
            )}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
                disabled={readonly}
            >
                {optionsList}
            </select>
        </div>
    )
}
