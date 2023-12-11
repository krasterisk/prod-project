import React, { memo, useCallback } from 'react'
import cls from './EndpointsPage.module.scss'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ContentViewSelector } from '@/features/ContentViewSelector'
import { endpointsPageReducer } from '../../model/slice/endpointsPageSlice'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useEndpoints } from '../../api/endpointsApi'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { EndpointsList } from '@/entities/Pbx'
import { EndpointFiltersContainer } from '../EndpointFiltersContainer/EndpointFiltersContainer'
import { useEndpointFilters } from '../../lib/hooks/useEndpointFilters'
import { useSortedAndFilteredData } from '../../lib/hooks/useSortedAndFilteredData'

interface EndpointsPageProps {
  className?: string
}

const reducers: ReducersList = {
  endpointsPage: endpointsPageReducer
}

const EndpointsPage = ({ className }: EndpointsPageProps) => {
  const {
    view,
    onChangeView,
    sort,
    search
  } = useEndpointFilters()

  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useEndpoints(null)

  const endpoints = useSortedAndFilteredData(data, sort, search)

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  console.log(view)

  const onLoadNextPart = useCallback(() => {
    console.log('onLoadNextPart')
  }, [])

  // useInitialEffect(() => {
  //   dispatch(initEndpointsPage(searchParams))
  // })

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
                    endpoints={endpoints}
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
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
  )
}

export default memo(EndpointsPage)
