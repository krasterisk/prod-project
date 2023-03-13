import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ManualDetailsPageProps {
    className?: string

}

const ManualDetailsPage = ({ className }: ManualDetailsPageProps) => {
    const { t } = useTranslation('manual')

    return (
        <div className={classNames(cls.ManualDetailsPage, {}, [className])}>
            MANUAL DETAILS PAGE
        </div>
    )
}

export default memo(ManualDetailsPage)
