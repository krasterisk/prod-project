import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointsList.module.scss'
import { memo } from 'react'
import { useEndpoints } from '../../api/endpointsApi'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Table } from '@/shared/ui/redesigned/Table/Table'
import { endpointsColumns } from '../../lib/columnHelpers/EndpointsColumns'

interface EndpointsListProps {
  className?: string

}

export const EndpointsList = memo((props: EndpointsListProps) => {
  const {
    className
  } = props

  const {
    data,
    isLoading
  } = useEndpoints(null)

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
            <Card
                className={classNames(cls.EndpointsList, {}, [className])}
                padding={'24'}
                max
                border={'partial'}
            >
                <Table data={data} columns={endpointsColumns} />
            </Card>
  )
})
