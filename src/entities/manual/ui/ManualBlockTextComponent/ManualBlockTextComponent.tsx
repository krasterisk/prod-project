import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualBlockTextComponent.module.scss'
import { useTranslation } from 'react-i18next'

interface ManualBlockTextComponentProps {
    className?: string

}

export const ManualBlockTextComponent = ({ className }: ManualBlockTextComponentProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ManualBlockTextComponent, {}, [className])}>
            ManualBlockTextComponent
        </div>
    )
}
