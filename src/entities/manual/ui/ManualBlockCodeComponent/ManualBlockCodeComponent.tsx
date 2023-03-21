import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualBlockCodeComponent.module.scss'
import { memo } from 'react'

interface ManualBlockCodeComponentProps {
    className?: string

}

export const ManualBlockCodeComponent = memo(({ className }: ManualBlockCodeComponentProps) => {
    return (
        <div className={classNames(cls.ManualBlockCodeComponent, {}, [className])}>
            ManualBlockCodeComponent
        </div>
    )
})
