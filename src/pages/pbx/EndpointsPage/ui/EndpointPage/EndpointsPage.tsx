import React, { memo, useCallback, useState } from 'react'
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
import { Text } from '@/shared/ui/redesigned/Text'
import { useTranslation } from 'react-i18next'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface EndpointsPageProps {
  className?: string
}

const reducers: ReducersList = {
  endpointsPage: endpointsPageReducer
}

const EndpointsPage = ({ className }: EndpointsPageProps) => {
//  const [endpoints, setEndpoints] = useState<Endpoint[]>([])
  const [curPage, setCurPage] = useState<number>(1)
  const { t } = useTranslation('endpoints')
  const dispatch = useAppDispatch()

  const {
    page,
    limit,
    view,
    order,
    onChangeView,
    sort,
    search,
    hasMore,
    onChangePage,
    onChangeHasMore
  } = useEndpointFilters()

  const {
    data: endpoints,
    isLoading,
    isError,
    error,
    isFetching,
    refetch
  } = useEndpoints({ page: curPage, limit, sort, search, order })

  const onRefetch = useCallback(() => {
    refetch()
  }, [refetch])

  const onLoadNextPart = useCallback(() => {
    if (endpoints && hasMore && !isLoading && !isFetching) {
      setCurPage(curPage + 1)
      const isHasMore = endpoints?.length >= limit
      onChangeHasMore(isHasMore)
      console.log('End', curPage + 1)
      console.log('hasMore', hasMore)
      console.log('endpoints length: ', endpoints.length)
      console.log('limit: ', limit)
    }
  }, [curPage, endpoints, hasMore, isFetching, isLoading, limit, onChangeHasMore])

  const onLoadPrevPart = useCallback(() => {
    if (hasMore && !isLoading && !isFetching && curPage > 1) {
      setCurPage(curPage - 1)
      console.log('End', curPage - 1)
    }
  }, [curPage, hasMore, isFetching, isLoading])

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
                onScrollStart={onLoadPrevPart}
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

  if (!endpoints?.length) {
    return (
        <div className={classNames(cls.ContentList, {}, [className, cls[view]])}>
          <Text
              size={'xl'}
              text={t('Абоненты не найдены')}
          />
        </div>
    )
  }
  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
  )
}

export default memo(EndpointsPage)
