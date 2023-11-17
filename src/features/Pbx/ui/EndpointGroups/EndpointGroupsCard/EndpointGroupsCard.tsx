import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface EndpointGroupsCardProps {
  className?: string

}

export const EndpointGroupsCard = memo((props: EndpointGroupsCardProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.EndpointGroupsCard, {}, [className])}>

        </div>
  )
})
