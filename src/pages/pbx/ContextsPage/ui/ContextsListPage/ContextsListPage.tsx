import React, { memo, useCallback } from 'react'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { ContentViewSelector } from '@/features/ContentViewSelector'

import { classNames } from '@/shared/lib/classNames/classNames'
import cls from '../../../EndpointsPage/ui/EndpointPage/EndpointsPage.module.scss'
import { useContextFilters } from '../../lib/hooks/useContextFilters'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { initContextsPage } from '../../model/service/initContextsPage/initContextsPage'
import { ContextsList } from '@/entities/Pbx'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { contextsPageReducer } from '../../model/slice/contextsPageSlice'
import { ContextFiltersContainer } from '../ContextFiltersContainer/ContextFiltersContainer'

interface ContextsListPageProps {
  className?: string
}

const reducers: ReducersList = {
  contextsPage: contextsPageReducer
}

export const ContextsListPage = ({ className }: ContextsListPageProps) => {
  const {
    view,
    isError,
    isLoading,
    error,
    data,
    onChangeView,
    onRefetch,
    onLoadNext
  } = useContextFilters()

  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    onLoadNext()
    //    onRefetch()
  }, [onLoadNext])

  useInitialEffect(() => {
    dispatch(initContextsPage())
  })
  const content = <StickyContentLayout
        left={<ContentViewSelector view={view} onViewClick={onChangeView}/>}
        right={<ContextFiltersContainer />}
        content={
            <Page
                data-testid={'ContextsPage'}
                onScrollEnd={onLoadNextPart}
                className={classNames(cls.ContextsListPage, {}, [className])}
                isSaveScroll={true}
            >
                <ContextsList
                    contexts={data?.rows}
                    isLoading={isLoading}
                    isError={isError}
                    // view={view}
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

export default memo(ContextsListPage)
