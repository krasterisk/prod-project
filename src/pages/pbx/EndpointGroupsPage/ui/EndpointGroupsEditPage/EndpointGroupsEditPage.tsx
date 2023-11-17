import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsEditPage.module.scss'
import { memo } from 'react'

interface EndpointGroupsEditPageProps {
  className?: string

}

export const EndpointGroupsEditPage = memo((props: EndpointGroupsEditPageProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.EndpointGroupsEditPage, {}, [className])}>

        </div>
  )
})
