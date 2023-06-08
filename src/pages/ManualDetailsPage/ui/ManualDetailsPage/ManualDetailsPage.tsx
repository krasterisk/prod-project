import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualDetailsPage.module.scss'
import { memo } from 'react'
import { ManualDetails } from '@/entities/Manual'
import { useParams } from 'react-router-dom'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { manualDetailsPageReducer } from '../../model/slices'
import { ManualDetailsPageHeader } from '../ManualDetailsPageHeader/ManualDetailsPageHeader'
import { VStack } from '@/shared/ui/Stack'
import { ManualRecommendationsList } from '@/features/manualRecommendationsList'
import { ManualDetailsComments } from '../../ui/ManualDetailsComments/ManualDetailsComments'
import { ManualRating } from '@/features/manualRating'
import { ToggleFeatures } from '@/shared/lib/features'
import { Card } from '@/shared/ui/Card'
import { useTranslation } from 'react-i18next'

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
            <Page className={classNames(cls.ManualDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ManualDetailsPageHeader />
                    <ManualDetails id={id} />
                    <ManualRating manualId={id}/>
                    <ManualRecommendationsList />

                    <ManualDetailsComments id={id} />
                </VStack>
            </Page>
        </DynamicModuleLoader>

  )
}

export default memo(ManualDetailsPage)
