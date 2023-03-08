import { classNames, Mods } from 'shared/lib/classNames/classNames'
import cls from './Select.module.scss'
import { ChangeEvent, memo, useMemo } from 'react'

export interface SelectOptions {
    value: string
    content: string
}

interface SelectProps {
    className?: string
    label?: string | null
    options?: SelectOptions[]
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        label,
        options,
        onChange,
        value,
        readonly
    } = props

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
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
})
