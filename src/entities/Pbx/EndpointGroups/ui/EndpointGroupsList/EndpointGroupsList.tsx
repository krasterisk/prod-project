import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsList.module.scss'
import { useTranslation } from 'react-i18next'
import React, { memo, useCallback, useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { EndpointGroups } from '../../model/types/endpointGroups'
import { ErrorGetData } from '@/entities/ErrorGetData'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Card } from '@/shared/ui/redesigned/Card'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Table } from '@/shared/ui/redesigned/Table/Table'
import {
  EndpointGroupsListHeader
} from '../EndpointGroupsListHeader/EndpointGroupsListHeader'

interface EndpointGroupsListProps {
  className?: string
  isLoading?: boolean
  isError?: boolean
  endpointGroups?: EndpointGroups[]
  onDelete?: (id: string) => void
}

export const EndpointGroupsList = memo((props: EndpointGroupsListProps) => {
  const {
    className,
    isLoading,
    isError,
    endpointGroups,
    onDelete
  } = props

  const { t } = useTranslation('endpoints')
  const columnHelper = createColumnHelper<EndpointGroups>()
  const [checkedId, setCheckedId] = useState<string>('')

  const endpointGroupsColumns = [
    columnHelper.accessor('id', {
      id: 'id',
      cell: info => info.getValue(),
      header: () => t('Id')
    }),
    columnHelper.accessor('name', {
      id: 'name',
      cell: info => info.getValue(),
      header: () => t('Наименование')
    }),
    columnHelper.accessor(row => row.description, {
      id: 'description',
      cell: info => <i>{info.getValue()}</i>,
      header: () => t('Комментарий')
    })
  ]
  const handlerOnEdit = useCallback((id: string) => {
    setCheckedId(id)
    // navigate(getRouteEndpointEdit(id))
  }, [])

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
        <VStack gap={'16'} max className={classNames(cls.EndpointGroupsList, {}, [className])}>
            <Card
                className={cls.EndpointsGroupsListHeader}
                padding={'8'}
                max
                border={'partial'}
            >
                <EndpointGroupsListHeader checkedId={checkedId} onDelete={onDelete} />
            </Card>
            <Card
                className={cls.EndpointGroupsTable}
                padding={'24'}
                max
                border={'partial'}
            >
                <Table data={endpointGroups} columns={endpointGroupsColumns} onEdit={handlerOnEdit}/>
            </Card>
        </VStack>
  )
})
