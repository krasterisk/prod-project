import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { ManualList } from 'entities/Manual'
import { VStack } from 'shared/ui/Stack'
import { useManualRecommendationsList } from '../../api/manualRecommendationsApi'

interface ManualRecommendationsListProps {
    className?: string
}

export const ManualRecommendationsList = memo((props: ManualRecommendationsListProps) => {
    const { className } = props
    const { t } = useTranslation('manuals')
    const { data: manuals, isLoading, error } = useManualRecommendationsList('')

    if (isLoading || error) {
        return null
    }

    return (
        <VStack gap="8" className={classNames('', {}, [className])}>
            <Text
                size={TextSize.L}
                title={t('Рекомендуем')}
            />
            <ManualList
                manuals={manuals}
                target={'_blank'}
            />

        </VStack>
    )
})
