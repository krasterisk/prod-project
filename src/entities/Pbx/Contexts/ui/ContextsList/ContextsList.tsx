import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextsList.module.scss'
import { ContextsListProps } from '../../model/types/contexts'
import React from 'react'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ContentList } from '@/entities/Content'
import { ContextsListHeader } from '../ContextsListHeader/ContextsListHeader'

export const ContextsList = (props: ContextsListProps) => {
  const {
    className,
    isLoading,
    isError,
    contexts,
    view = 'SMALL'
  } = props

  if (isError) {
    return (
            <ErrorGetData/>
    )
  }

  return (
        <VStack gap={'16'} max className={classNames(cls.EndpointsList, {}, [className])}>
            <ContextsListHeader />
            <ContentList
                isLoading={isLoading}
                data={contexts}
                componentName={'contexts'}
                view={view}
            />
        </VStack>
  )
}
