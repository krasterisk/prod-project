import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsList.module.scss'
import { memo } from 'react'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Table } from '@/shared/ui/redesigned/Table/Table'
import { EndpointsListProps } from '../../model/types/endpoints'
import { endpointsColumns } from '../../model/types/EndpointsColumns'
import { EndpointHeader } from '../EndpointHeader/EndpointHeader'

export const EndpointsList = memo((props: EndpointsListProps) => {
  const {
    className,
    isLoading,
    data
  } = props

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
        <VStack gap={'16'} max className={classNames(cls.EndpointsList, {}, [className])}>
            <Card
                className={cls.EndpointsListHeader}
                padding={'8'}
                max
                border={'partial'}
            >
                <EndpointHeader/>
            </Card>
            <Card
                className={cls.EndpointsTable}
                padding={'24'}
                max
                border={'partial'}
            >
                <Table data={data} columns={endpointsColumns}/>
            </Card>
        </VStack>
  )
})
