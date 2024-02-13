import React, { memo, useCallback } from 'react'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ContentViewSelector } from '@/features/ContentViewSelector'

import { classNames } from '@/shared/lib/classNames/classNames'
import cls from '../../../EndpointsPage/ui/EndpointPage/EndpointsPage.module.scss'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initEndpointGroupsPage } from '../../model/service/initEndpointGroupsPage/initEndpointGroupsPage'
import { EndpointGroupsList } from '@/entities/Pbx'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { endpointGroupsPageReducer } from '../../model/slice/endpointGroupsPageSlice'
import { useEndpointGroupsFilters } from '../../lib/hooks/useEndpointGroupsFilters'
import {
  EndpointGroupsFiltersContainer
} from '../EndpointGroupsFiltersContainer/EndpointGroupsFiltersContainer'

interface EndpointGroupsListPageProps {
  className?: string
}

const reducers: ReducersList = {
  endpointGroupsPage: endpointGroupsPageReducer
}

export const EndpointGroupsListPage = ({ className }: EndpointGroupsListPageProps) => {
  const {
    view,
    isError,
    isLoading,
    error,
    data,
    onChangeView,
    onRefetch,
    hasMore,
    onLoadNext
  } = useEndpointGroupsFilters()

  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    if (hasMore) {
      onLoadNext()
    }
  }, [hasMore, onLoadNext])

  useInitialEffect(() => {
    dispatch(initEndpointGroupsPage())
  })
  const content = <StickyContentLayout
      left={<ContentViewSelector view={view} onViewClick={onChangeView}/>}
      right={<EndpointGroupsFiltersContainer />}
      content={
        <Page
            data-testid={'EndpointGroupsPage'}
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.EndpointGroupsListPage, {}, [className])}
            isSaveScroll={true}
        >
          <EndpointGroupsList
              endpointGroups={data?.rows}
              isLoading={isLoading}
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

export default memo(EndpointGroupsListPage)
