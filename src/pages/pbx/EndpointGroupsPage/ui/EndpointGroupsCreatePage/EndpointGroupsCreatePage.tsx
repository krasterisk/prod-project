import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsCreatePage.module.scss'
import { memo } from 'react'

interface EndpointGroupsCreatePageProps {
  className?: string

}

export const EndpointGroupsCreatePage = memo((props: EndpointGroupsCreatePageProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.EndpointGroupsCreatePage, {}, [className])}>

        </div>
  )
})
