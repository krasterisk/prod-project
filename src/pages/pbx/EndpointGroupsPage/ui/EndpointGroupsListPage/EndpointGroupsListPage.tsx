import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsListPage.module.scss'
import { memo } from 'react'

interface EndpointGroupsListPageProps {
  className?: string

}

export const EndpointGroupsListPage = memo((props: EndpointGroupsListPageProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.EndpointGroupsListPage, {}, [className])}>

        </div>
  )
})
