import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { RatingCard } from '@/entities/Rating'
import { useGetManualRating, useSetManualRating } from '../../api/manualRatingApi'
import { getTokenData } from '@/app/providers/getTokenData/getTokenData'
import { getUserAuthData } from '@/entities/User'
import { useSelector } from 'react-redux'
import { Skeleton } from '@/shared/ui/Skeleton'

export interface ManualRatingProps {
    className?: string
    manualId: string
}

const ManualRating = memo((props: ManualRatingProps) => {
    const {
        className,
        manualId
    } = props
    const { t } = useTranslation('manuals')
    const userData = useSelector(getUserAuthData)
    const userId = getTokenData(userData?.token)

    const { data, isLoading } = useGetManualRating({
        postId: Number(manualId),
        userId: Number(userId) ?? 0
    })

    const [rateManualMutation] = useSetManualRating()

    const handelRateManual = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateManualMutation({
                userId: Number(userId) ?? 0,
                postId: Number(manualId),
                rate: starsCount,
                feedback
            })
        } catch (e) {
            throw Error()
        }
    }, [manualId, rateManualMutation, userId])

    const onCancel = useCallback((starsCount: number) => {
        handelRateManual(starsCount)
    }, [handelRateManual])

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handelRateManual(starsCount, feedback)
    }, [handelRateManual])

    const title = t('Как вам статья?')
    const feedbackTitle = t('Оставьте отзыв')
    const rating = data?.[0]

    if (isLoading) {
        return <Skeleton width={'100%'} height={120}/>
    }

    return (
        <RatingCard
            rate={rating?.rate}
            className={className}
            title={title}
            feedbackTitle={feedbackTitle}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
        />
    )
})

export default ManualRating
