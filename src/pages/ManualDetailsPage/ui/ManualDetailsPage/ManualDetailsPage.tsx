import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ManualDetails } from 'entities/manual'
import { useParams } from 'react-router-dom'

interface ManualDetailsPageProps {
    className?: string

}

const ManualDetailsPage = ({ className }: ManualDetailsPageProps) => {
    const { t } = useTranslation('manual')
    const { id } = useParams<{ id: string }>()

    if (!id) {
        return (
            <div className={classNames(cls.ManualDetailsPage, {}, [className])}>
                {t('Страница не найдена')}
            </div>
        )
    }

    return (
        <div className={classNames(cls.ManualDetailsPage, {}, [className])}>
            <ManualDetails id={id}/>
        </div>
    )
}

export default memo(ManualDetailsPage)
