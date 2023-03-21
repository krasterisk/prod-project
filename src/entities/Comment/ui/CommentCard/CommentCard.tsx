import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'
import { memo } from 'react'
import { Comments } from '../../model/types/comments'

interface CommentCardProps {
    className?: string
    comment: Comments
    isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
    const { className, comment, isLoading } = props

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            comment
        </div>
    )
})
