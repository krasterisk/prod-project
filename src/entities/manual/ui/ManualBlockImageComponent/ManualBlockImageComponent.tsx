import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualBlockImageComponent.module.scss'
import { useTranslation } from 'react-i18next'

interface ManualBlockImageComponentProps {
    className?: string

}

export const ManualBlockImageComponent = ({ className }: ManualBlockImageComponentProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.ManualBlockImageComponent, {}, [className])}>
            ManualBlockImageComponent
        </div>
    )
}
