import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsList.module.scss'
import React from 'react'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { EndpointsListProps } from '../../model/types/endpoints'
import { EndpointsListHeader } from '../EndpointsListHeader/EndpointsListHeader'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { ContentList } from '@/entities/Content'

export const EndpointsList = (props: EndpointsListProps) => {
  const {
    className,
    isLoading,
    isError,
    endpoints,
    view = 'SMALL'
  } = props

  if (isError) {
    return (
            <ErrorGetData/>
    )
  }

  return (
        <VStack gap={'16'} max className={classNames(cls.EndpointsList, {}, [className])}>
                <EndpointsListHeader />
                <ContentList
                    isLoading={isLoading}
                    data={endpoints}
                    componentName={'endpoints'}
                    view={view}
                />
        </VStack>
  )
}
