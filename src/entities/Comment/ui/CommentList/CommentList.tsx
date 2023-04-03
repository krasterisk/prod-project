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
    isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const {
        className,
        comments,
        isLoading
    } = props
    const { t } = useTranslation()

    if (isLoading) {
        return (
            <div className={classNames(cls.CommentList, {}, [className, cls.loading])}>
                <CommentCard isLoading />
                <CommentCard isLoading />
                <CommentCard isLoading />
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comment => (
                    <CommentCard
                        isLoading={isLoading}
                        comment={comment}
                        className={cls.comment}
                        key={comment.id}
                    />
                ))
                : <Text text={t('Пока нет комментариев')}/>
            }
        </div>
    )
})
