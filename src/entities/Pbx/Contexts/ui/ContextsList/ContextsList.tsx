import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContextsList.module.scss'
import { Context, ContextsListProps } from '../../model/types/contexts'
import { useTranslation } from 'react-i18next'
import { createColumnHelper } from '@tanstack/react-table'
import React from 'react'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Table } from '@/shared/ui/redesigned/Table/Table'
import { ContextsListHeader } from '../ContextsListHeader/ContextsListHeader'

export const ContextsList = (props: ContextsListProps) => {
  const {
    className,
    isLoading,
    isError,
    contexts
  } = props

  const { t } = useTranslation('endpoints')

  const columnHelper = createColumnHelper<Context>()

  const contextsColumns = [
    columnHelper.accessor('name', {
      id: 'name',
      cell: info => info.getValue(),
      header: () => t('Контекст')
    }),
    columnHelper.accessor(row => row.description, {
      id: 'description',
      cell: info => <i>{info.getValue()}</i>,
      header: () => t('Описание')
    }),
    columnHelper.accessor('includes', {
      header: () => t('Включает'),
      cell: info => info.renderValue()
    })
  ]

  if (isError) {
    <ErrorGetData />
  }

  if (isLoading) {
    return (
        <VStack
            gap={'16'}
            max
            className={classNames(cls.NotificationList, {}, [className])}
        >
          <Skeleton width='100%' border='8px' height='80px'/>
          <Skeleton width='100%' border='8px' height='80px'/>
          <Skeleton width='100%' border='8px' height='80px'/>
        </VStack>
    )
  }

  return (
        <div className={classNames(cls.ContextsList, {}, [className])}>
          <VStack gap={'16'} max className={classNames(cls.ContextsList, {}, [className])}>
            <Card
                className={cls.ContextsListHeader}
                padding={'8'}
                max
                border={'partial'}
            >
              <ContextsListHeader />
            </Card>
            <Card
                className={cls.EndpointsTable}
                padding={'24'}
                max
                border={'partial'}
            >
              <Table data={contexts} columns={contextsColumns}/>
            </Card>
          </VStack>
        </div>
  )
}
