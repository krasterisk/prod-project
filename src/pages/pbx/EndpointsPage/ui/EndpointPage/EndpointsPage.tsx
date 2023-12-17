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

interface EndpointsPageProps {
  className?: string
}

const reducers: ReducersList = {
  endpointsPage: endpointsPageReducer
}

const EndpointsPage = ({ className }: EndpointsPageProps) => {
  const {
    page,
    hasMore,
    limit,
    view,
    order,
    onChangeView,
    sort,
    search,
    onChangePage,
    onChangeHasMore
  } = useEndpointFilters()

  //  const [endpoints, setEndpoints] = useState<Endpoint[]>([])

  const {
    data: endpoints,
    isLoading,
    isError,
    error,
    refetch
  } = useEndpoints({ page, limit, sort, search, order })

  // useEffect(() => {
  //   if (data?.length) {
  //     setEndpoints(data)
  //   }
  // }, [data])

  //  const endpoints = useSortedAndFilteredData(data, sort, search)

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNextPart = useCallback(() => {
    if (endpoints?.length) {
      onChangePage(page + 1)
      // refetch()
    }
    console.log('Current page', page)
  }, [endpoints, onChangePage, page])

  // useInitialEffect(() => {
  //   dispatch(initEndpointsPage())
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
