import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './EndpointEdit.module.scss'
import { memo } from 'react'

interface EndpointEditProps {
  className?: string

}

export const EndpointEdit = memo((props: EndpointEditProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.EndpointEdit, {}, [className])}>

        </div>
  )
})
