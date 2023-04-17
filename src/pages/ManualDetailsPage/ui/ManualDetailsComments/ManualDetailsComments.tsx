import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/AddCommentForm'
import { CommentList } from 'entities/Comment'
import { useDispatch, useSelector } from 'react-redux'
import { getManualComments } from '../../model/slices/manualDetailsCommentsSlice'
import { getManualCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForManual } from '../../model/service/addCommentForManual/addCommentForManual'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import {
    fetchCommentsByManualId
} from '../../model/service/fetchCommentsByManualId/fetchCommentsByManualId'
import { VStack } from 'shared/ui/Stack'

interface ManualDetailsCommentsProps {
    className?: string
    id: string
}

export const ManualDetailsComments = memo((props: ManualDetailsCommentsProps) => {
    const {
        className,
        id
    } = props

    const { t } = useTranslation('manuals')
    const dispatch = useDispatch()
    const comments = useSelector(getManualComments.selectAll)
    const commentsIsLoading = useSelector(getManualCommentsIsLoading)
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForManual(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByManualId(id))
    })

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </VStack>
    )
})
