import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointGroupsCreateCard.module.scss'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface EndpointGroupsCreateCardProps {
  className?: string

}

export const EndpointGroupsCreateCard = memo((props: EndpointGroupsCreateCardProps) => {
  const {
    className
  } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(cls.EndpointGroupsCreateCard, {}, [className])}>

        </div>
  )
})
