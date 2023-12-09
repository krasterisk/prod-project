import React, { memo, useCallback } from 'react'
import cls from './EndpointsPage.module.scss'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ContentViewSelector } from '@/features/ContentViewSelector'
import { ContentView } from '@/entities/Content'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { endpointsPageActions, endpointsPageReducer } from '../../model/slice/endpointsPageSlice'
import { getEndpointsPageView } from '../../model/selectors/endpointsPageSelectors'
import { useSelector } from 'react-redux'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initEndpointsPage } from '../../model/service/initEndpointsPage/initEndpointsPage'
import { useSearchParams } from 'react-router-dom'
import { useEndpoints } from '../../api/endpointsApi'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { EndpointsList } from '@/entities/Pbx'
import { EndpointFiltersContainer } from '../EndpointFiltersContainer/EndpointFiltersContainer'

interface EndpointsPageProps {
  className?: string
}

const reducers: ReducersList = {
  endpointsPage: endpointsPageReducer
}

const EndpointsPage = ({ className }: EndpointsPageProps) => {
  const [searchParams] = useSearchParams()
  const view = useSelector(getEndpointsPageView)
  const dispatch = useAppDispatch()

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useEndpoints(null)

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNextPart = useCallback(() => {
    console.log('onLoadNextPart')
  }, [])

  const onChangeView = useCallback((newView: ContentView) => {
    dispatch(endpointsPageActions.setView(newView))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initEndpointsPage(searchParams))
  })

  const content = <StickyContentLayout
        left={<ContentViewSelector view={view} onViewClick={onChangeView}/>}
        right={<EndpointFiltersContainer />}
        content={
            <Page
                data-testid={'EndpointsPage'}
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.EndpointsPage, {}, [className])}
                isSaveScroll={true}
            >
                <EndpointsList
                    className={className}
                    isLoading={isLoading}
                    endpoints={data}
                    isError={isError}
                    view={view}
                />
            </Page>
        }
    />

  if (isError) {
    const errMsg = error && 'data' in error
      ? String((error.data as { message: string }).message)
      : ''

    return (
            <ErrorGetData
                text={errMsg}
                onRefetch={onRefetch}
            />
    )
  }

  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
            {content}
        </DynamicModuleLoader>
  )
}

export default memo(EndpointsPage)
