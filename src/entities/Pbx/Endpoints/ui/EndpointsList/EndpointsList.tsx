import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsList.module.scss'
import React from 'react'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Card } from '@/shared/ui/redesigned/Card'
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

  if (isLoading) {
    return (
            <VStack gap={'16'} max>
                    <Card max>
                        <Skeleton width='100%' border='8px' height='44px'/>
                    </Card>
                    <Skeleton width='100%' border='8px' height='80px'/>
                    <Skeleton width='100%' border='8px' height='80px'/>
                    <Skeleton width='100%' border='8px' height='80px'/>
            </VStack>
    )
  }

  return (
        <VStack gap={'16'} max className={classNames(cls.EndpointsList, {}, [className])}>
                <EndpointsListHeader />
                <ContentList
                data={endpoints}
                componentName={'endpoints'}
                view={view}
                />
        </VStack>
  )
}
