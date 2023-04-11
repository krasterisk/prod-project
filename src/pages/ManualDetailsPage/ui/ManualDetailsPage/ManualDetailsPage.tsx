import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ManualDetails, ManualList } from 'entities/Manual'
import { useParams } from 'react-router-dom'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getManualComments } from '../../model/slices/manualDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getManualCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByManualId } from '../../model/service/fetchCommentsByManualId/fetchCommentsByManualId'
import { AddCommentForm } from 'features/AddCommentForm'
import { addCommentForManual } from '../../model/service/addCommentForManual/addCommentForManual'
import { Page } from 'widgets/Page/Page'
import { getManualRecommendations } from '../../model/slices/manualDetailsRecommendationsSlice'
import { getManualRecommendationsIsLoading } from '../../model/selectors/recommendations'
import { fetchManualRecommendations } from '../../model/service/fetchManualRecommendations/fetchManualRecommendations'
import { manualDetailsPageReducer } from '../../model/slices'
import { ManualDetailsPageHeader } from '../ManualDetailsPageHeader/ManualDetailsPageHeader'
import { VStack } from 'shared/ui/Stack'

interface ManualDetailsPageProps {
    className?: string
}

const reducers: ReducersList = {
    manualDetailsPage: manualDetailsPageReducer
}

const ManualDetailsPage = ({ className }: ManualDetailsPageProps) => {
    const { t } = useTranslation('manuals')
    const { id } = useParams<{ id: string }>()
    const comments = useSelector(getManualComments.selectAll)
    const commentsIsLoading = useSelector(getManualCommentsIsLoading)
    const recommendations = useSelector(getManualRecommendations.selectAll)
    const recommendationsIsLoading = useSelector(getManualRecommendationsIsLoading)

    const dispatch = useDispatch()

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForManual(text))
    }, [dispatch])

    useInitialEffect(() => {
        dispatch(fetchCommentsByManualId(id))
        dispatch(fetchManualRecommendations())
    })

    if (!id) {
        return (
            <Page className={classNames(cls.ManualDetailsPage, {}, [className])}>
                {t('Страница не найдена')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames(cls.ManualDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ManualDetailsPageHeader/>
                    <ManualDetails id={id}/>
                    <Text
                        size={TextSize.L}
                        title={t('Рекомендуем')}
                    />
                    <ManualList
                        className={cls.recommendations}
                        manuals={recommendations}
                        isLoading={recommendationsIsLoading}
                        target={'_blank'}
                    />
                    <Text
                        size={TextSize.L}
                        title={t('Комментарии')}
                    />
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList isLoading={commentsIsLoading} comments={comments}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>

    )
}

export default memo(ManualDetailsPage)
