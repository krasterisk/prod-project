import React, { memo, useCallback } from 'react'
import cls from './EndpointsPage.module.scss'
import { Page } from '@/widgets/Page'
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ContentViewSelector } from '@/features/ContentViewSelector'
import { endpointsPageReducer } from '../../model/slice/endpointsPageSlice'
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { EndpointsList } from '@/entities/Pbx'
import { EndpointFiltersContainer } from '../EndpointFiltersContainer/EndpointFiltersContainer'
import { useEndpointFilters } from '../../lib/hooks/useEndpointFilters'
import { useTranslation } from 'react-i18next'

interface EndpointsPageProps {
  className?: string
}

const reducers: ReducersList = {
  endpointsPage: endpointsPageReducer
}

const EndpointsPage = ({ className }: EndpointsPageProps) => {
  const { t } = useTranslation('endpoints')

  const {
    view,
    isError,
    isLoading,
    error,
    data,
    onChangeView,
    onRefetch,
    onLoadNext
  } = useEndpointFilters()

  const onLoadNextPart = useCallback(async () => {
    onLoadNext()
    //    onRefetch()
  }, [onLoadNext])

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
                    endpoints={data?.rows}
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

  // if (!data?.rows.length) {
  //   return (
  //       <div className={classNames(cls.ContentList, {}, [className, cls[view]])}>
  //         <Text
  //             size={'xl'}
  //             text={t('Абоненты не найдены')}
  //         />
  //       </div>
  //   )
  // }
  //
  return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
  )
}

export default memo(EndpointsPage)
