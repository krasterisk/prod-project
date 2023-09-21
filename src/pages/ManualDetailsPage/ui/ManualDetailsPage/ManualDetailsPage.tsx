import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { memo } from 'react'
import { ManualDetails } from '@/entities/Manual'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { manualDetailsPageReducer } from '../../model/slices'
import { ManualDetailsPageHeader } from '../ManualDetailsPageHeader/ManualDetailsPageHeader'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ManualRecommendationsList } from '@/features/manualRecommendationsList'
import { ManualDetailsComments } from '../../ui/ManualDetailsComments/ManualDetailsComments'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { ManualRating } from '@/features/manualRating'
import { Card } from '@/shared/ui/redesigned/Card'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { DetailsContainer } from '../DetailsContainer/DetailsContainer'
import { AdditionInfoContainer } from '../AdditionInfoContainer/AdditionInfoContainer'

interface ManualDetailsPageProps {
  className?: string
}

const reducers: ReducersList = {
  manualDetailsPage: manualDetailsPageReducer
}

const ManualDetailsPage = ({ className }: ManualDetailsPageProps) => {
  const { t } = useTranslation('manuals')

  const { id } = useParams<{ id: string }>()

  if (!id) {
    return null
  }

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={
                <StickyContentLayout
                content={
                    <Page className={classNames(cls.ManualDetailsPage, {}, [className])}>
                        <VStack gap={'16'} max>
                            <ManualDetailsPageHeader />
                            <DetailsContainer />
                            <ManualRecommendationsList/>
                            <ManualRating manualId={id}/>
                            <ManualDetailsComments id={id}/>
                        </VStack>
                    </Page>
                }
                right={<AdditionInfoContainer />}
                />
                }
                off={
                    <Page className={classNames(cls.ManualDetailsPage, {}, [className])}>
                        <VStack gap={'16'} max>
                            <ManualDetailsPageHeader/>
                            <ManualDetails id={id}/>
                            <ManualRecommendationsList/>
                            <ToggleFeatures
                                feature={'isManualRatingEnabled'}
                                on={<ManualRating manualId={id}/>}
                                off={<Card>{t('Оценка статей скоро появится')}</Card>}
                            />
                            <ManualDetailsComments id={id}/>
                        </VStack>
                    </Page>
                }
            />

        </DynamicModuleLoader>

  )
}

export default memo(ManualDetailsPage)
