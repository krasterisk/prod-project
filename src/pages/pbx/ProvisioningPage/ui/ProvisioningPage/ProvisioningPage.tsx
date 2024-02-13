import React, { memo, useCallback } from 'react'
import cls from './ProvisioningPage.module.scss'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ContentViewSelector } from '@/features/ContentViewSelector'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ProvisioningList } from '@/entities/Pbx'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { provisioningPageReducer } from '../../model/slice/provisioningPageSlice'
import { useProvisioningFilters } from '../../lib/hooks/ProvisioningFilters'
import { ProvisioningFiltersContainer } from '../ProvisioningFiltersContainer/ProvisioningFiltersContainer'
import { initProvisioningPage } from '../../model/service/initProvisioningPage/initProvisioningPage'

interface ProvisioningPageProps {
  className?: string
}

const reducers: ReducersList = {
  provisioningPage: provisioningPageReducer
}

const ProvisioningPage = ({ className }: ProvisioningPageProps) => {
  const {
    view,
    isError,
    isLoading,
    error,
    data,
    hasMore,
    onChangeView,
    onRefetch,
    onLoadNext
  } = useProvisioningFilters()
  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    if (hasMore) {
      onLoadNext()
    }
    //    onRefetch()
  }, [hasMore, onLoadNext])

  useInitialEffect(() => {
    dispatch(initProvisioningPage())
  })

  const content = <StickyContentLayout
      left={<ContentViewSelector view={view} onViewClick={onChangeView}/>}
      right={<ProvisioningFiltersContainer />}
      content={
        <Page
            data-testid={'ProvisioningPage'}
            onScrollEnd={onLoadNextPart}
            className={classNames(cls.ProvisioningPage, {}, [className])}
            isSaveScroll={true}
        >
          <ProvisioningList
              className={className}
              isLoading={isLoading}
              provisionTemplates={data?.rows}
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

export default memo(ProvisioningPage)
