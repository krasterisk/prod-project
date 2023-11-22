import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContentViewSelector.module.scss'
import { memo } from 'react'

interface ContentViewSelectorProps {
  className?: string

}

export const ContentViewSelector = memo((props: ContentViewSelectorProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.ContentViewSelector, {}, [className])}>

        </div>
  )
})
