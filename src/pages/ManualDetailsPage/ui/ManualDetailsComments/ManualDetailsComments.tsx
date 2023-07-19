import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { Text, TextSize } from '@/shared/ui/deprecated/Text'
import { AddCommentForm } from '@/features/AddCommentForm'
import { CommentList } from '@/entities/Comment'
import { useSelector } from 'react-redux'
import { getManualComments } from '../../model/slices/manualDetailsCommentsSlice'
import { getManualCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForManual } from '../../model/service/addCommentForManual/addCommentForManual'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByManualId } from '../../model/service/fetchCommentsByManualId/fetchCommentsByManualId'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ManualDetailsCommentsProps {
  className?: string
  id?: string
}

export const ManualDetailsComments = memo((props: ManualDetailsCommentsProps) => {
  const {
    className,
    id
  } = props

  const { t } = useTranslation('manuals')
  const dispatch = useAppDispatch()
  const comments = useSelector(getManualComments.selectAll)
  const commentsIsLoading = useSelector(getManualCommentsIsLoading)
  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForManual(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByManualId(id))
  })

  return (
        <VStack gap="8" max className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Комментарии')}
            />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList isLoading={commentsIsLoading} comments={comments}/>
        </VStack>
  )
})
