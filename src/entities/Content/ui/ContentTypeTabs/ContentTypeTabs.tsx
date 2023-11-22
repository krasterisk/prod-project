import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './ContentTypeTabs.module.scss'
import { memo } from 'react'

interface ContentTypeTabsProps {
  className?: string

}

export const ContentTypeTabs = memo((props: ContentTypeTabsProps) => {
  const {
    className
  } = props
  return (
        <div className={classNames(cls.ContentTypeTabs, {}, [className])}>

        </div>
  )
})
