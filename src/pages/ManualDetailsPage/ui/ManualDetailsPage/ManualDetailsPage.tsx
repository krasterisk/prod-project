import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ManualDetails } from 'entities/Manual'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getManualComments, manualDetailsCommentsReducer } from '../../model/slices/manualDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getManualCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByManualId } from '../../model/service/fetchCommentsByManualId/fetchCommentsByManualId'

interface ManualDetailsPageProps {
    className?: string

}

const reducers: ReducersList = {
    manualDetailsComments: manualDetailsCommentsReducer
}

const ManualDetailsPage = ({ className }: ManualDetailsPageProps) => {
    const { t } = useTranslation('manuals')
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getManualComments.selectAll)
    const commentsIsLoading = useSelector(getManualCommentsIsLoading)
    const dispatch = useDispatch()

    useInitialEffect(() => {
        dispatch(fetchCommentsByManualId(id))
    })

    if (!id) {
        return (
            <div className={classNames(cls.ManualDetailsPage, {}, [className])}>
                {t('Страница не найдена')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ManualDetailsPage, {}, [className])}>
                <ManualDetails id={id}/>
                <Text className={cls.commentTitle} title={t('Комментарии')} />
                <CommentList isLoading={commentsIsLoading} comments={comments}/>
            </div>
        </DynamicModuleLoader>

    )
}

export default memo(ManualDetailsPage)
