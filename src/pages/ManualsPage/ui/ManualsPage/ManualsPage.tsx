import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ManualsPage.module.scss'
import { memo, useCallback } from 'react'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { manualPageReducer } from '../../model/slice/manualPageSlice'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Page } from '@/widgets/Page'
import { fetchNextManualPage } from '../../model/services/fetchNextManualPage/fetchNextManualPage'
import { ManualInfiniteList } from '../../ui/ManualInfiniteList/ManualInfiniteList'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initManualPage } from '../../model/services/initManualPage/initManualPage'
import { useSearchParams } from 'react-router-dom'
import { ToggleFeatures } from '@/shared/lib/features'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer'
import { FiltersContainer } from '../FiltersContainer/FiltersContainer'
import { ManualPageFilters } from '../ManualPageFilters/ManualPageFilters'

interface ManualsPageProps {
  className?: string
}

const reducers: ReducersList = {
  manualsPage: manualPageReducer
}

const ManualsPage = ({ className }: ManualsPageProps) => {
  const [searchParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextManualPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initManualPage(searchParams))
  })

  const content = <ToggleFeatures
        feature={'isAppRedesigned'}
        on={
            <StickyContentLayout
                left={<ViewSelectorContainer/>}
                right={<FiltersContainer />}
                content={
                    <Page
                        data-testid={'ManualPage'}
                        onScrollEnd={onLoadNextPart}
                        className={classNames(cls.ManualsPageRedesigned, {}, [className])}
                        isSaveScroll={true}
                    >
                        <ManualInfiniteList className={cls.list}/>
                    </Page>
                }
            />
        }
        off={
            <Page
                data-testid={'ManualPage'}
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ManualsPage, {}, [className])}
                isSaveScroll={true}
            >
                 <ManualPageFilters/>
                 <ManualInfiniteList className={cls.list}/>
            </Page>
        }
    />

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
  )
}

export default memo(ManualsPage)
