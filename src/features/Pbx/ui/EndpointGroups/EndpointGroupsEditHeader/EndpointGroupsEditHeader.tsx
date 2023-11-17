import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsEditHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface EndpointGroupsEditHeaderProps {
  className?: string

}

export const EndpointGroupsEditHeader = memo((props: EndpointGroupsEditHeaderProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.EndpointGroupsEditHeader, {}, [className])}>

        </div>
  )
})
