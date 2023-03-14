import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualBlockCodeComponent.module.scss'
import { useTranslation } from 'react-i18next'

interface ManualBlockCodeComponentProps {
    className?: string

}

export const ManualBlockCodeComponent = ({ className }: ManualBlockCodeComponentProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ManualBlockCodeComponent, {}, [className])}>
            ManualBlockCodeComponent
        </div>
    )
}
