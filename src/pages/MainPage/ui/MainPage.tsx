import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page/Page'
import { StarRating } from '@/shared/ui/StarRating/StarRating'
import { RatingCard } from '@/entities/Rating'

const MainPage = memo(() => {
    const { t } = useTranslation('main')

    return (
        <Page>
            {t('Главная')}
            <RatingCard
                title={'Как вам статья?'}
                feedbackTitle={'Напишите отзыв'}
                hasFeedback />
        </Page>
    )
})

export default MainPage
