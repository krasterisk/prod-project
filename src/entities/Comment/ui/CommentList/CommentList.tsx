import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { CommentCard } from '../../ui/CommentCard/CommentCard'
import { Text } from 'shared/ui/Text/Text'
import { Comments } from '../../model/types/comments'

interface CommentListProps {
    className?: string
    comments?: Comments[]

}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments
    } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard comment={comment} />
                ))
                : <Text text={t('Пока нет комментариев')}/>
            }
        </div>
    )
})
