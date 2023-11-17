import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsEditCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface EndpointGroupsEditCardProps {
  className?: string

}

export const EndpointGroupsEditCard = memo((props: EndpointGroupsEditCardProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.EndpointGroupsEditCard, {}, [className])}>

        </div>
  )
})
