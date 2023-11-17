import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsCreateHeader.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface EndpointGroupsCreateHeaderProps {
  className?: string

}

export const EndpointGroupsCreateHeader = memo((props: EndpointGroupsCreateHeaderProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.EndpointGroupsCreateHeader, {}, [className])}>

        </div>
  )
})
