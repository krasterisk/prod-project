import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsList.module.scss'
import React, { memo } from 'react'
import { EndpointGroupsListProps } from '../../model/types/endpointGroups'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { VStack } from '@/shared/ui/redesigned/Stack'
import {
  EndpointGroupsListHeader
} from '../EndpointGroupsListHeader/EndpointGroupsListHeader'
import { ContentList } from '@/entities/Content'

export const EndpointGroupsList = memo((props: EndpointGroupsListProps) => {
  const {
    className,
    isLoading,
    isError,
    endpointGroups,
    view = 'SMALL'
  } = props

  if (isError) {
    return (
            <ErrorGetData/>
    )
  }

  return (
        <VStack gap={'16'} max className={classNames(cls.EndpointsList, {}, [className])}>
            <EndpointGroupsListHeader />
            <ContentList
                isLoading={isLoading}
                data={endpointGroups}
                componentName={'endpointGroups'}
                view={view}
            />
        </VStack>
  )
})
