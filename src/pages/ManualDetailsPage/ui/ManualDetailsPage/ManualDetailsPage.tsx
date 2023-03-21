import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ManualDetails } from 'entities/Manual'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'

interface ManualDetailsPageProps {
    className?: string

}

const ManualDetailsPage = ({ className }: ManualDetailsPageProps) => {
    const { t } = useTranslation('manuals')
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
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList />
        </div>

    )
}

export default memo(ManualDetailsPage)
