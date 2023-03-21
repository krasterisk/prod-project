import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualBlockImageComponent.module.scss'
import { memo } from 'react'

interface ManualBlockImageComponentProps {
    className?: string

}

export const ManualBlockImageComponent = memo(({ className }: ManualBlockImageComponentProps) => {
    return (
        <div className={classNames(cls.ManualBlockImageComponent, {}, [className])}>
            ManualBlockImageComponent
        </div>
    )
})
